import React, { createContext, useEffect, useState, ReactNode } from "react";

interface GlobalContextProps {
  theme: string;
  toggle: () => void;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

const getFromLocalStorage = (): string => {
  const value = localStorage.getItem("theme");
  return value || "light";
};

export interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    console.log(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme, toggle }}>
      {children}
    </GlobalContext.Provider>
  );
};
