import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase, findOneDocument } from '../../../helpers/db';
import { verifyPassword } from '../../../helpers/auth';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const client = await connectToDatabase('lockertest');
        const user = await findOneDocument(client, 'lockers', {
          email: email,
        });

        if (!user) {
          return null;
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error('Credentials not valid');
        }

        const id = user._id.toString();

        return { email: user.email, id };
      },
    }),
  ],
  pages: {
    signIn: '/populate',
  },
  callbacks: {
    session: async ({ session, user, token }) => {
      if (token && session.user) {
        // @ts-ignore
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user && user.id) {
        token.sub = user.id;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
