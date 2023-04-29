import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Button = ({ text }) => {
  const { isDark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleClick = () => {
    const path = text === "Home" ? "/" : `/${text}`;
    navigate(`${path}`);
  };
  return (
    <>
      <button
        className={isDark ? "button btn-darkMode" : "btn button"}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
