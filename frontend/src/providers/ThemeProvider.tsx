import React, { useContext, ReactNode } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useContext(GlobalContext);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
