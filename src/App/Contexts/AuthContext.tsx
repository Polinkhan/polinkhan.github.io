import { ReactNode, createContext, useEffect, useState } from "react";
import { AuthContextTypes } from "../Types/ContextTypes";

export const AuthContext = createContext({} as AuthContextTypes);

const AuthContextPropvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const init = () => {
    setIsLoggedIn(sessionStorage.getItem("login") === "true");
  };

  useEffect(() => {
    init();
  }, []);

  const value: any = { isLoggedIn, init };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextPropvider;
