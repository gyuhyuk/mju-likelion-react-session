import "../Main.css";

import { useState } from "react";

import Info from "./info";
import HobbyList from "./HobbyList";
import SpecialList from "./SpecialList";
import Data from "./Data.json";
import DarkMode from "./DarkMode";

const Main = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className={isDark ? "darkMode" : ""}>
        <DarkMode darkMode={setIsDark} dark={isDark} />
        <Info data={Data} dark={isDark} />
        <HobbyList data={Data} dark={isDark} />
        <SpecialList data={Data} dark={isDark} />
      </div>
    </>
  );
};

export default Main;
