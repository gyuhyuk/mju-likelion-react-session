import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Motive = (props) => {
  const { isDark } = useContext(ThemeContext);
  const motive = props.data;
  return (
    <>
      <div className={isDark ? "container-darkMode" : "first-container"}>
        <h1 className="header-h1">Motive</h1>
        <p className="korean">{motive}</p>
      </div>
    </>
  );
};

export default Motive;
