import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Head from "next/head";

import { mainTheme } from "@/utils/Pallete";
import { ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Head>
        <title>Tecnirem</title>
        <meta name="description" content="Tecnirem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
