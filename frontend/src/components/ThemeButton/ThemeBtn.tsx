import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";

import "./ThemeButton.css";

const ThemeBtn: React.FC = () => {
  const { theme, toggle } = useContext<{ theme: string; toggle: () => void }>(
    GlobalContext
  );
  console.log(theme);

  return (
    <div className="themeButtonContainer">
      <div className="themeButton" onClick={toggle}>
        {theme === "light" ? <MdDarkMode /> : <FaSun />}
      </div>
    </div>
  );
};

export default ThemeBtn;
