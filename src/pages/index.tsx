import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Home from "../components/Home";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>SOLAMA</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default IndexPage;
