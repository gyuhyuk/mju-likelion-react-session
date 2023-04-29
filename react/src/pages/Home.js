import Data from "./Data.json";
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Detail from "./Detail";
import Capability from "./Capability";
import Mylink from "./Mylink";
import "../Main.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <Header data={Data.header} />
      <div className={isDark ? "profile-darkMode" : "profile"}>
        <Info data={Data} />
        <div className="container">
          <About data={Data.aboutMe} />
          <Detail data={Data.details} />
          <Capability data={Data.capability} />
          <Mylink
            data={(Data.instagramLink, Data.githubLink, Data.naverLink)}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
