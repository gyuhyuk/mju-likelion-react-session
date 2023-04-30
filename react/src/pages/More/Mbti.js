import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Mbti = (props) => {
  const { isDark } = useContext(ThemeContext);
  const mbti = props.data;
  return (
    <>
      <div className={isDark ? "container-darkMode" : "third-container"}>
        <h1 className="header-h1">My MBTI! Guess What?</h1>
        <p>{mbti}</p>
      </div>
    </>
  );
};

export default Mbti;
