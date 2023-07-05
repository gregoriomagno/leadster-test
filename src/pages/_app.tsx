import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";
import Head from "next/head";
import theme from "../styles/theme";

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
        <title>Leadster</title>
        <meta
          name="description"
          content="Landing page - teste leadster"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

      <GlobalStyles />
    </>
  );
}

export default MyApp;
