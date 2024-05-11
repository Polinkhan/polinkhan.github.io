import { ReactNode, createContext, useState } from "react";
import { ActiveSectionType, UIContextTypes } from "../Types/ContextTypes";

export const UIContext = createContext({} as UIContextTypes);

const UIContextPropvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<ActiveSectionType>();

  const value: any = { activeSection, setActiveSection };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIContextPropvider;
