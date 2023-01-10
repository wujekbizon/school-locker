import '../styles/globals.css';
import '../styles/styles.css';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import Layout from '../components/layout/Layout';
import AdminPanelLayout from '../components/admin/layout/Layout';
import { LightModeProvider } from '../components/context/lightModeContext';
import { AppProvider } from '../components/context/globalContext';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  // temp isAdmin flag
  const isAdmin = false;

  return (
    <SessionProvider session={session}>
      <AppProvider>
        <LightModeProvider>
          {isAdmin ? (
            <AdminPanelLayout>
              <Component {...pageProps} />
            </AdminPanelLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </LightModeProvider>
      </AppProvider>
    </SessionProvider>
  );
}
