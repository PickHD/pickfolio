import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/globals.scss";
import "../styles/variables.scss";
import "../styles/loader.scss";
import "../styles/_utils.scss";

import "../styles/about.scss";
import "../styles/banner.scss";
import "../styles/contact.scss";
import "../styles/footer.scss";
import "../styles/headerArea.scss";
import "../styles/loader.scss";
import "../styles/project.scss";
import "../styles/skills.scss";

import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
