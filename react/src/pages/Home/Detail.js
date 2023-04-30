import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Detail = (props) => {
  const { isDark } = useContext(ThemeContext);
  const details = props.data;
  return (
    <>
      <div className={isDark ? "container-darkMode" : "second-container"}>
        <h1 className="header-h1">Activity Details</h1>
        <p className="korean">{details}</p>
      </div>
    </>
  );
};

export default Detail;
