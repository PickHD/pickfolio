import Head from "next/head";
import Script from "next/script";
import Loader from "../components/Loader";
import HeaderArea from "../components/HeaderArea";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Pickfolio</title>
      </Head>
      <HeaderArea />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Main />
          <Footer />
          <Script
            src="https://kit.fontawesome.com/3ced0348db.js"
            crossOrigin="anonymous"
          />
        </>
      )}
    </>
  );
}
