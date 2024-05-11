import { Box, BoxProps } from "@mui/material";
import html from "../../../assets/logos/html5.svg";

interface SvgProps extends BoxProps {
  size?: number;
}

const SvgIcon = (props: SvgProps) => {
  const { size, ...rest } = props;
  return <Box component={"img"} height={size} src={html} />;
};

export default SvgIcon;
