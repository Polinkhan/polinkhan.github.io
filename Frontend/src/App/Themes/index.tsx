import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const theme = createTheme({ palette: palette(), typography: typography, shape: { borderRadius: 8 } });
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
