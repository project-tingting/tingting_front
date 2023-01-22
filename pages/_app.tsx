import React, { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../public/assets/fonts/style.css';

import AppLayout from '../components/Layout/AppLayout';

export default function _app({ Component, pageProps }: AppProps) {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });
  return (
    <>
      <Head>
        <title>TingTing</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RecoilRoot>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </RecoilRoot>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
