import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../public/assets/fonts/style.css';

export default function _app({ Component, pageProps }: AppProps) {
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
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
