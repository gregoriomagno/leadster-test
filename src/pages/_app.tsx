import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";
import Head from "next/head";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <title>Next</title>
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
        <link rel="icon" href="/assets/favicon.svg" />

        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>

      <Component {...pageProps} />

      <GlobalStyles />
    </>
  );
}

export default MyApp;
