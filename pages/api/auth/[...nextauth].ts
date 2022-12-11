import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase, findOneDocument } from '../../../helpers/db';
import { verifyPassword } from '../../../helpers/auth';

export default NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      // @ts-ignore
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const client = await connectToDatabase('lockertest');
        const userLocker = await findOneDocument(client, 'lockers', {
          email: credentials.email,
        });

        if (!userLocker) {
          return null;
        }

        const isValid = await verifyPassword(
          credentials.password,
          userLocker.password
        );

        if (!isValid) {
          console.log('Credentials not valid');
          return null;
        }

        return { email: userLocker.email, id: userLocker._id };
      },
    }),
  ],
});
