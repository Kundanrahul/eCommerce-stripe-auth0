import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react';
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { UserProvider } from '@auth0/nextjs-auth0/client';

interface MyAppProps {
  Component: React.ComponentType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <UserProvider>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
      </UserProvider>
  );
}

export default MyApp;

