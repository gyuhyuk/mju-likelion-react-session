import { useContext } from "react";
import Hobby from "./Hobby";
import { ThemeContext } from "../../ThemeContext";

const HobbyList = (props) => {
  const { isDark } = useContext(ThemeContext);
  const hobby = props.data;
  return (
    <>
      <div className={isDark ? "container-darkMode" : "second-container"}>
        <h1 className="header-h1">Hobby</h1>
        {hobby.map((data, index) => (
          <Hobby data={data} key={index} />
        ))}
      </div>
    </>
  );
};

export default HobbyList;
