// Import Custom Modified Bulma Sass Compiled CSS
import "../css/custom.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/global/Layout";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <Head>
        <title>CliniSol</title>
        {/* Imports the CSS which is compiled from Sass By Bulma */}
        {/* <link rel="stylesheet" href="../styles/globals.css"></link> */}

        {/* Material UI Icons */}
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
