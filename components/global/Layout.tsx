import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Head>
        <title>CliniSol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Sidebar />
      <main className="main-content">{children}</main>

      <style jsx>{`
        .main-content {
          position: absolute;
          width: 80%;
          left: 20%;
          top: 4rem;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
