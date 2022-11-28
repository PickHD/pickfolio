import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Project from "./Project";
import Skill from "./Skill";

const Main = ({}) => {
  return (
    <>
      <main className="site-main">
        <Banner />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
    </>
  );
};

export default Main;
