export type ActiveSectionType = "home" | "work" | "skill" | "experience" | "education";

export type UIContextTypes = {
  activeSection: ActiveSectionType;
  setActiveSection: any;
};

export type AuthContextTypes = {
  isLoggedIn: boolean;
  init: () => void;
};
