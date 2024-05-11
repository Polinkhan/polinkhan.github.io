import { Box, Stack, Typography } from "@mui/material";
import Section from "../../Components/section/Section";
import profile from "../../../assets/images/profile.jpg";

const AboutMe = () => {
  return (
    <Section id="about" headerText="About Me">
      <Stack direction={"row"} gap={10} py={3} alignItems={"center"}>
        <Stack flex={1} gap={3}>
          <Typography textAlign={"justify"} lineHeight={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quam aut deleniti mollitia suscipit
            laudantium at numquam minus ipsum. Pariatur voluptate nostrum cupiditate reprehenderit suscipit animi, optio
            illum quam architecto est ducimus dolore hic! Deleniti ducimus sit ipsam quis fugit enim minus omnis!
            Provident, quisquam reprehenderit. Ex voluptatibus maxime quasi!
          </Typography>
          <Typography textAlign={"justify"} lineHeight={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium ducimus sint magni repudiandae saepe
            quae, cum sapiente aliquam, magnam natus officia accusamus, esse repellendus sequi nesciunt laboriosam
            commodi doloremque a. Maxime architecto nam numquam maiores tenetur hic facere repellat? Dignissimos
            blanditiis obcaecati perspiciatis. Veniam, nobis praesentium! Laboriosam, fugit amet?
          </Typography>
        </Stack>
        <Stack flex={1} overflow={"hidden"} borderRadius={5}>
          <Box component={"img"} src={profile} />
        </Stack>
      </Stack>
    </Section>
  );
};

export default AboutMe;
