import { Box, Container, Drawer, IconButton, Stack, Typography } from "@mui/material";
import CustomButton from "../button/CustomButton";
import { useUIContext } from "../../Hooks/Contexts/useUIContext";
import { useResponsive } from "../../Hooks/use-responsive";
import { IoMenu } from "react-icons/io5";
import useBoolean from "../../Hooks/use-boolean";
import { FaXmark } from "react-icons/fa6";
import { useAuthContext } from "../../Hooks/Contexts/useAuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { activeSection } = useUIContext();
  const isLeargeScreen = useResponsive("up", "lg");

  return (
    <Stack py={3} bgcolor={activeSection ? "tranparent" : "secondary.dark"} width={1} position={"fixed"} zIndex={999}>
      <Container>
        <Stack
          gap={2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={isLeargeScreen ? "space-between" : "start"}
        >
          {!isLeargeScreen && <MobileNavList />}
          <BrandLogo />
          {isLeargeScreen && <NavList />}
        </Stack>
      </Container>
    </Stack>
  );
};

const BrandLogo = () => {
  const fontProps = { fontSize: "1.5rem", fontWeight: 500 };
  const { isLoggedIn } = useAuthContext();

  return (
    <Typography>
      <Typography component={"span"} {...fontProps} color={"secondary.contrastText"}>
        Abu Sayed
      </Typography>{" "}
      <Typography component={"span"} {...fontProps} color={"primary.main"}>
        Polin
      </Typography>
      {isLoggedIn && (
        <Typography component={"span"} color={"secondary.contrastText"} variant="caption" px={1}>
          (Admin)
        </Typography>
      )}
    </Typography>
  );
};

const MobileNavList = () => {
  const { open, onOpen, onClose } = useBoolean();
  return (
    <Stack>
      <IconButton color="default" onClick={onOpen}>
        <IoMenu color="#fff" />
      </IconButton>
      <Drawer
        open={open}
        anchor="left"
        onClose={onClose}
        PaperProps={{ sx: { p: 3, width: 200, bgcolor: "secondary.dark" } }}
      >
        <IconButton color="default" onClick={onClose} sx={{ alignSelf: "start" }}>
          <FaXmark color="#fff" />
        </IconButton>
        <NavList direction="column" onClickLink={onClose} />
      </Drawer>
    </Stack>
  );
};

interface NavListProps {
  direction?: "row" | "column";
  onClickLink?: (any?: any) => any | undefined;
}

const NavList = ({ direction = "row", onClickLink }: NavListProps) => {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  return (
    <Stack direction={direction} alignItems={"center"} gap={4}>
      {navlist.map(({ label, to }, i) => {
        const isActive = i == 0;
        const color = isActive ? "primary.main" : "secondary.contrastText";
        return (
          <Box key={i} onClick={onClickLink}>
            <Typography p={1} component={"a"} href={`#${to}`} sx={{ textDecoration: "none" }} color={color}>
              {label}
            </Typography>
          </Box>
        );
      })}

      {isLoggedIn ? (
        <CustomButton onClick={() => navigate("/manage")}>Manage Site</CustomButton>
      ) : (
        <CustomButton component={"a"} href="#contact" onClick={onClickLink}>
          Contact Me
        </CustomButton>
      )}
    </Stack>
  );
};

const navlist = [
  { label: "Home", to: "home" },
  { label: "Work", to: "work" },
  { label: "Skill", to: "skill" },
  { label: "Experience", to: "experience" },
  { label: "Education", to: "education" },
  { label: "About Me", to: "about" },
];

export default Navbar;
