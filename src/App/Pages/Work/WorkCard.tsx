import { Box, Stack, Typography } from "@mui/material";
import BrandText from "../../Components/brandText/BrandText";
import LinkButton from "../../Components/button/LinkButton";
import { FaEye, FaGithub } from "react-icons/fa";
import DevTool from "./DevTool";

export type WorkDetailsType = {
  name: string;
  description: string;
  credential: {
    name: string;
    password: string;
  };
  tools: string[];
  source: {
    live: string;
    github: string;
  };
  img: string;
};

interface WorkCardProps {
  index: number;
  workDetails: WorkDetailsType;
}

const WorkCard = ({ index, workDetails }: WorkCardProps) => {
  const isOdd = index % 2 == 0;

  return (
    <Stack p={5} bgcolor={"secondary.main"} direction={"row"} gap={5} borderRadius={1.5}>
      {isOdd && <Banner src={workDetails.img} />}
      <Details workDetails={workDetails} />
      {!isOdd && <Banner src={workDetails.img} />}
    </Stack>
  );
};

const Details = ({ workDetails }: { workDetails: WorkDetailsType }) => {
  const { name, description, credential, tools, source, img } = workDetails;

  return (
    <Stack flex={1} gap={3} justifyContent={"space-between"}>
      <BrandText variant="h5">{name}</BrandText>

      <Typography color={"grey.500"}>{description}</Typography>

      <Stack color={"grey.500"}>
        <Typography>Name : {credential.name}</Typography>
        <Typography>Password : {credential.password}</Typography>
      </Stack>

      <Stack direction={"row"} color={"grey.500"} gap={3}>
        {tools.map((tool, i) => (
          <DevTool name={tool} key={i} />
        ))}
      </Stack>

      <Stack direction={"row"} gap={3}>
        <LinkButton component={"a"} href={source.live} startIcon={<FaEye />}>
          Live
        </LinkButton>
        <LinkButton component={"a"} href={source.github} startIcon={<FaGithub />}>
          Source
        </LinkButton>
      </Stack>
    </Stack>
  );
};

const Banner = ({ src }: { src: string }) => {
  return (
    <Stack flex={1} bgcolor={"secondary.light"} borderRadius={1.5} overflow={"hidden"}>
      <Box component={"img"} src={src} />
    </Stack>
  );
};

export default WorkCard;
