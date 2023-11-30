import React, { useContext, ReactNode } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface ThemeProviderProps {
  children: ReactNode;
}
interface GlobalContextProps {
  theme: string;
  toggle: () => void;
  token: string;
  addToken: (arg0: string) => void;
}


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const contextValue = useContext<GlobalContextProps | undefined>(
    GlobalContext
  );
  if (!contextValue) {
    return null;
  }
  const { theme } = contextValue;
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
