import '../styles/globals.css';
import '../styles/styles.css';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import Layout from '../components/layout/Layout';
import AdminPanelLayout from '../components/admin/layout/Layout';
import { LightModeProvider } from '../context/lightModeContext';
import { AppProvider } from '../context/globalContext';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  // temp isAdmin flag
  const isAdmin = false;

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
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
      </Provider>
    </SessionProvider>
  );
}
