// Import Custom Modified Bulma Sass Compiled CSS
import "../css/custom.css";
import type { AppProps } from "next/app";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CliniSol</title>
        {/* Imports the CSS which is compiled from Sass By Bulma */}
        {/* <link rel="stylesheet" href="../styles/globals.css"></link> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
