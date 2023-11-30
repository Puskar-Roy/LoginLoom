import React, { createContext, useEffect, useState, ReactNode } from "react";

interface GlobalContextProps {
  theme: string;
  toggle: () => void;
  token : string;
  addToken : ( arg0: string )=>void;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

const getFromLocalStorage = (): string => {
  const value = localStorage.getItem("theme");
  return value || "light";
};

const getUserJwt = (): string => {
  const value = localStorage.getItem("jwt_token");
  console.log(value);
  return value || "";
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
  const [token, setToken] = useState(() => {
    return getUserJwt();
  });

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addToken = (t:string)=>{
    setToken(t);
  }

  useEffect(() => {
    console.log("Theme - ",theme);
    console.log("Token - ",token);
    localStorage.setItem("theme", theme);
    localStorage.setItem("jwt_token", token);
  }, [theme,token]);

  return (
    <GlobalContext.Provider value={{ theme, toggle , token , addToken}}>
      {children}
    </GlobalContext.Provider>
  );
};
