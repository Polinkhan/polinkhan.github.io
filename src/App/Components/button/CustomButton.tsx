import { Button, ButtonProps, CircularProgress } from "@mui/material";
// import { getIcon } from "../icon/Icons";
// import { IconType } from "../../common/types";
import { Link } from "react-router-dom";

// @ts-ignore
export interface CustomButtonProps extends ButtonProps {
  //   icon?: IconType;
  //   endIcon?: IconType;
  loading?: boolean;
  iconSize?: number;
  routerLink?: any;
  color?: "error" | "inherit" | "primary" | "secondary" | "success" | "info" | "warning";
}

const CustomButton = ({ routerLink, ...rest }: CustomButtonProps) => {
  if (routerLink) {
    return (
      <Link to={routerLink}>
        <MainComponent color="primary" {...rest} />
      </Link>
    );
  }
  return <MainComponent {...rest} />;
};

const MainComponent = ({ endIcon, iconSize, loading, children, color, sx, ...rest }: CustomButtonProps) => {
  return (
    <Button
      color={color}
      disabled={loading}
      variant="contained"
      sx={{ px: 3, py: 1.25, fontSize: 16, fontWeight: 500, ...sx }}
      //   startIcon={icon && getIcon(icon, iconSize)}
      //   endIcon={endIcon && getIcon(endIcon, iconSize)}
      {...rest}
    >
      {children} {loading && <CircularProgress color="inherit" size={16} sx={{ ml: 2 }} />}
    </Button>
  );
};

export default CustomButton;
