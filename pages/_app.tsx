import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import Layout from '../components/layout/Layout';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
