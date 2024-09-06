import { Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/Contexts/useAuthContext";
import { useSnackbar } from "notistack";

const Footer = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoggedIn, init } = useAuthContext();

  const handleClick = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem("login");
      enqueueSnackbar("Logged Out", { variant: "success" });
      init();
    } else {
      navigate("login");
    }
  };

  return (
    <Stack bgcolor={"secondary.light"} color={"grey.500"}>
      <Container>
        <Stack direction={"row"} py={4} justifyContent={"center"} gap={1}>
          <Typography variant="body2">© {new Date().getFullYear()} All Rights Reserved.</Typography>
          <Typography variant="body2" sx={{ textDecoration: "underline", cursor: "pointer" }} onClick={handleClick}>
            {isLoggedIn ? "Logout" : "Login"}
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
