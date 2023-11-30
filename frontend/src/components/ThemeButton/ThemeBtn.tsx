import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";

import "./ThemeButton.css";

interface GlobalContextProps {
  theme: string;
  toggle: () => void;
  token:string;
}
const ThemeBtn: React.FC = () => {
  const contextValue = useContext(GlobalContext) as
    | GlobalContextProps
    | undefined;

  if (!contextValue) {
    return null;
  }

  const { theme, toggle } = contextValue;
  return (
    // <div className="themeButtonContainer">
      <div className="themeButton" onClick={toggle}>
        {theme === "light" ? <MdDarkMode /> : <FaSun />}
      </div>
    // </div>
  );
};

export default ThemeBtn;

