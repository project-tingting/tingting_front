import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { RecoilRoot } from 'recoil';

export default function _app({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TingTing</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
