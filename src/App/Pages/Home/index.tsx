import { Box, Stack, Typography } from "@mui/material";
import HeroBanner from "../../../assets/images/HeroBanner.png";
import CustomButton from "../../Components/button/CustomButton";
import Lottie from "lottie-react";
import HeroLottie from "../../../assets/lottie/HeroLottie.json";
import Section from "../../Components/section/Section";
import { useInView } from "react-intersection-observer";
import { useUIContext } from "../../Hooks/Contexts/useUIContext";
import { useEffect } from "react";
import { useResponsive } from "../../Hooks/use-responsive";

const Home = ({}) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection } = useUIContext();
  const isMediumScreen = useResponsive("down", "lg");

  useEffect(() => {
    setActiveSection(inView);
  }, [inView]);

  return (
    <Section
      ref={ref}
      id="home"
      pt={0}
      display={"flex"}
      minHeight={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ backgroundImage: `url(${HeroBanner})`, backgroundRepeat: "repeat", backgroundSize: "466px" }}
    >
      <Stack gap={10} direction={{ md: "row" }} alignItems={"center"} justifyContent={"space-between"}>
        <Stack flex={1} alignItems={{ xs: "center", md: "start" }} gap={5}>
          <Typography variant="h2" color={"white"} textAlign={{ xs: "center", md: "start" }}>
            Software Engineer
          </Typography>
          <CustomButton component={"a"} href="#work">
            See My Work
          </CustomButton>
        </Stack>
        <Box flex={1}>
          <Lottie animationData={HeroLottie} style={{ height: isMediumScreen ? 320 : 420 }} />
        </Box>
      </Stack>
    </Section>
  );
};

export default Home;
