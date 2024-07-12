import { Box, Collapse, Icon, Stack, Typography } from "@mui/material";
import BrandText from "../../Components/brandText/BrandText";
import LinkButton from "../../Components/button/LinkButton";
import { FaEye, FaGithub } from "react-icons/fa";
import DevTool from "./DevTool";
import { useResponsive } from "../../Hooks/use-responsive";
import useBoolean from "../../Hooks/use-boolean";
import { FaAngleDown } from "react-icons/fa6";

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
  const isMediumScreen = useResponsive("up", "md");
  const isOdd = !isMediumScreen || index % 2 == 0;

  return (
    <Stack p={{ xs: 2, md: 5 }} bgcolor={"secondary.main"} direction={{ md: "row" }} gap={5} borderRadius={1.5}>
      {isOdd && <Banner src={workDetails.img} />}
      <Details workDetails={workDetails} />
      {!isOdd && <Banner src={workDetails.img} />}
    </Stack>
  );
};

const Details = ({ workDetails }: { workDetails: WorkDetailsType }) => {
  const { open, onToggle } = useBoolean();
  const isMediumScreen = useResponsive("up", "md");
  const { name, description, credential, tools, source } = workDetails;

  return (
    <Stack flex={1} justifyContent={"space-between"}>
      <BrandText variant="h5">{name}</BrandText>

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
      <Collapse in={isMediumScreen || open}>
        <Typography pb={3} color={"grey.500"} variant="body2">
          {description}
        </Typography>

        <Stack color={"grey.500"} pb={3}>
          <Typography variant="body2">Name : {credential.name}</Typography>
          <Typography variant="body2">Password : {credential.password}</Typography>
        </Stack>
      </Collapse>

      <Stack direction={"row"} color={"grey.500"} gap={2} pb={3}>
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
    <Stack flex={{ xs: 1, md: 1 }} bgcolor={"secondary.light"} borderRadius={1.5} overflow={"hidden"}>
      <Box component={"img"} src={src} sx={{ maxHeight: 400, height: 1, objectFit: "cover" }} />
    </Stack>
  );
};

export default WorkCard;
