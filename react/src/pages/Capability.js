import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Capability = (props) => {
  const { isDark } = useContext(ThemeContext);
  const capability = props.data;
  return (
    <>
      <div className={isDark ? "container-darkMode" : "third-container"}>
        <h1 className="header-h1">basic Capability</h1>
        <p>{capability}</p>
      </div>
    </>
  );
};

export default Capability;
