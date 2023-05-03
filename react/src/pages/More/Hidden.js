import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Hidden = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { answer } = props.data;
  return (
    <>
      <button className={isDark ? "mbti-btn-darkMode" : "mbti-btn"}>
        {answer}
      </button>
    </>
  );
};

export default Hidden;
