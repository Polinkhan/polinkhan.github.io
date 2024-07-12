import { Box, Collapse, Icon, Stack, Typography } from "@mui/material";
import Section from "../../Components/section/Section";
import profile from "../../../assets/images/profile.jpg";
import useBoolean from "../../Hooks/use-boolean";
import { useResponsive } from "../../Hooks/use-responsive";
import { FaAngleDown } from "react-icons/fa6";
import { aboutRef } from "../../DB/firebase.config";
import useSnapshot from "../../Hooks/use-snapshot";

const AboutMe = () => {
  const { open, onToggle } = useBoolean();
  const isMediumScreen = useResponsive("up", "md");
  const { content } = useSnapshot({ ref: aboutRef, defaultValue: { header: "...", label: "..." } });

  return (
    <Section id="about" docRef={aboutRef} headerText={content.header} headerSubText={content.label}>
      <Stack direction={{ md: "row" }} gap={{ xs: 2, md: 10 }} py={3} alignItems={"center"}>
        {!isMediumScreen && (
          <Stack direction={"row"} alignItems={"center"} gap={1} sx={{ cursor: "pointer" }}>
            <Typography py={2} color={"grey.500"} variant="body2" onClick={onToggle}>
              View {open ? "less" : "more"}
            </Typography>
            <Icon
              sx={{
                color: "grey.500",
                fontSize: 14,
                transform: open ? "rotate(-180deg)" : "rotate(0deg)",
                transition: "0.6s ease",
              }}
            >
              <FaAngleDown />
            </Icon>
          </Stack>
        )}
        <Stack flex={1} gap={3}>
          <Collapse in={isMediumScreen || open}>
            <Typography textAlign={"justify"} lineHeight={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quam aut deleniti mollitia suscipit
              laudantium at numquam minus ipsum. Pariatur voluptate nostrum cupiditate reprehenderit suscipit animi,
              optio illum quam architecto est ducimus dolore hic! Deleniti ducimus sit ipsam quis fugit enim minus
              omnis! Provident, quisquam reprehenderit. Ex voluptatibus maxime quasi!
            </Typography>
            <Typography textAlign={"justify"} lineHeight={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium ducimus sint magni repudiandae
              saepe quae, cum sapiente aliquam, magnam natus officia accusamus, esse repellendus sequi nesciunt
              laboriosam commodi doloremque a. Maxime architecto nam numquam maiores tenetur hic facere repellat?
              Dignissimos blanditiis obcaecati perspiciatis. Veniam, nobis praesentium! Laboriosam, fugit amet?
            </Typography>
          </Collapse>
        </Stack>
        <Stack flex={1} overflow={"hidden"} borderRadius={5}>
          <Box component={"img"} src={profile} sx={{ width: 1 }} />
        </Stack>
      </Stack>
    </Section>
  );
};

export default AboutMe;
