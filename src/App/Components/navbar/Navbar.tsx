import { Container, Stack, Typography } from "@mui/material";
import CustomButton from "../button/CustomButton";
import { useUIContext } from "../../Hooks/Contexts/useUIContext";

const Navbar = () => {
  const { activeSection } = useUIContext();

  return (
    <Stack py={3} bgcolor={activeSection ? "tranparent" : "secondary.dark"} width={1} position={"fixed"} zIndex={999}>
      <Container>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <BrandLogo />
          <NavList />
        </Stack>
      </Container>
    </Stack>
  );
};

const BrandLogo = () => {
  const fontProps = { fontSize: "1.2rem", fontWeight: 500 };
  return (
    <Typography>
      <Typography component={"span"} {...fontProps} color={"secondary.contrastText"}>
        Abu Sayed
      </Typography>{" "}
      <Typography component={"span"} {...fontProps} color={"primary.main"}>
        Polin
      </Typography>
    </Typography>
  );
};

const NavList = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={4}>
      {navlist.map(({ label, to }, i) => {
        const isActive = i == 0;
        const color = isActive ? "primary.main" : "secondary.contrastText";
        return (
          <Typography p={1} key={i} component={"a"} href={to} sx={{ textDecoration: "none" }} color={color}>
            {label}
          </Typography>
        );
      })}
      <CustomButton component={"a"} href="#contact">
        Contact Me
      </CustomButton>
    </Stack>
  );
};

const navlist = [
  { label: "Home", to: "#home" },
  { label: "Work", to: "#work" },
  { label: "Skill", to: "#skill" },
  { label: "Experience", to: "#experience" },
  { label: "Education", to: "#education" },
  { label: "About Me", to: "#about" },
];

export default Navbar;
