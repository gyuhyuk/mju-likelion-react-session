import React from "react";

const DarkMode = (props) => {
  return (
    <>
      <button
        className="darkModeToggle"
        onClick={() => props.darkMode(!props.dark)}
      >
        {props.dark ? "whitemode" : "darkmode"}
      </button>
    </>
  );
};

export default DarkMode;
