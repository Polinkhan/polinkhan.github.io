import { PaletteOptions, alpha } from "@mui/material";

export type ColorSchema = "primary" | "secondary" | "info" | "success" | "warning" | "error" | "gray";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  light: "#42a5f5",
  main: "#0074f0",
  dark: "#1565c0",
  contrastText: "#fff",
};

const SECONDARY = {
  light: "#373748",
  main: "#2a2a32",
  dark: "#181820",
  contrastText: "#f3f3f4",
};

const INFO = {
  light: "#03a9f4",
  main: "#0288d1",
  dark: "#01579b",
  contrastText: "#fff",
};

const SUCCESS = {
  light: "#4caf50",
  main: "#2e7d32",
  dark: "#1b5e20",
  contrastText: "#fff",
};

const WARNING = {
  light: "#ff9800",
  main: "#ed6c02",
  dark: "#e65100",
  contrastText: "#fff",
};

const ERROR = {
  light: "#ef5350",
  main: "#d32f2f",
  dark: "#c62828",
  contrastText: "#fff",
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette() {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  return light as PaletteOptions;
}
