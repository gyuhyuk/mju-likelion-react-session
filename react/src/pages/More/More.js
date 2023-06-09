import Data from "../Data.json";
import Info from "../components/Info";
import Motive from "./Motive";
import HobbyList from "./Hobby/HobbyList";
import Mbti from "./Mbti";
import Hidden from "./Hidden";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "../../Main.css";

const More = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <div className={isDark ? "profile-darkMode" : "profile"}>
        <Info data={Data} />
        <div className="container">
          <Motive data={Data.motive} />
          <HobbyList data={Data.hobby} />
          <Mbti data={Data.mbti} />
          <Hidden data={Data} />
        </div>
      </div>
    </>
  );
};

export default More;
