import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import Layout from '../components/layout/Layout';
import AdminPanelLayout from '../components/admin/layout/Layout';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  // temp isAdmin flag
  const isAdmin = true;

  return (
    <SessionProvider session={session}>
      {isAdmin ? (
        <AdminPanelLayout>
          <Component {...pageProps} />
        </AdminPanelLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
}
