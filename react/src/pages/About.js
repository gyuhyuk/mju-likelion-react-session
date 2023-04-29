import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const About = (props) => {
  const { isDark } = useContext(ThemeContext);
  const aboutMe = props.data;
  return (
    <>
      <div className={isDark ? "container-darkMode" : "first-container"}>
        <h1 className="header-h1">About Me</h1>
        <p className="korean">{aboutMe}</p>
      </div>
    </>
  );
};

export default About;
