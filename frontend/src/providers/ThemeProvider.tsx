import React, { useContext, ReactNode } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const contextValue = useContext<GlobalContextProps | undefined>(
    GlobalContext
  );
  //   const { theme } = useContext(GlobalContext);
  if (!contextValue) {
    // Handle the case where contextValue is undefined
    return null;
  }
  const { theme } = contextValue;
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
