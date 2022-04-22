import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Head>
        <title>CliniSol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
