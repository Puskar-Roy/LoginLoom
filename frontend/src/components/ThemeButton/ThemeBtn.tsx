import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";

import "./ThemeButton.css";

const ThemeBtn: React.FC = () => {
  const { theme, toggle } = useContext<{ theme: string; toggle: () => void }>(
    GlobalContext
  );
    if (!theme || !toggle) {
//   Handle the case where theme or toggle is undefined
      return null;
    }

  return (
    <div className="themeButtonContainer">
      <div className="themeButton" onClick={toggle}>
        {theme === "light" ? <MdDarkMode /> : <FaSun />}
      </div>
    </div>
  );
};

export default ThemeBtn;



// // import React, { useContext } from "react";
// // import { GlobalContext, GlobalContextProps } from "../../context/GlobalContext";

// const ThemeBtn: React.FC = () => {
//   const { theme, toggle } = useContext<GlobalContextProps | undefined>(
//     GlobalContext
//   );

//   if (!theme || !toggle) {
    // Handle the case where theme or toggle is undefined
//     return null;
//   }

//   return (
//     <div>
//       <button onClick={toggle}>Change</button>
//     </div>
//   );
// };

// export default ThemeBtn;
