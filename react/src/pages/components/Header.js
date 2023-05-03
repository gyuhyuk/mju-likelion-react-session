import { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "../ThemeContext";

const Header = (props) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const ThemeToggle = () => {
    setIsDark(!isDark);
  };

  const header = props.data;
  return (
    <div className={props.hide ? "" : "status-bar-hidden"}>
      <div className={isDark ? "status-bar-darkMode" : "status-bar"}>
        <div>
          {header}
          <button
            className={isDark ? "toggleBtn-darkMode" : "toggleBtn"}
            onClick={ThemeToggle}
          >
            {isDark
              ? "Press Button To Light Mode"
              : "Press Button To Dark Mode"}
          </button>
        </div>
        <div>
          <Button text="Home" />
          <Button text="More" />
        </div>
      </div>
    </div>
  );
};

export default Header;
