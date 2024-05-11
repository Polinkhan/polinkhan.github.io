import { Stack, Typography } from "@mui/material";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiSocketdotio } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const DevTool = ({ name }: { name: string }) => {
  const getTools = () => {
    switch (name) {
      case "react-native": {
        return (
          <>
            <FaReact />
            <Typography>React Native</Typography>
          </>
        );
      }
      case "react": {
        return (
          <>
            <FaReact />
            <Typography>React</Typography>
          </>
        );
      }
      case "node-js": {
        return (
          <>
            <FaNodeJs />
            <Typography>Node JS</Typography>
          </>
        );
      }
      case "express-js": {
        return (
          <>
            <SiExpress />
            <Typography>Express JS</Typography>
          </>
        );
      }
      case "my-sql": {
        return (
          <>
            <GrMysql />
            <Typography>MySQL</Typography>
          </>
        );
      }
      case "web-socket": {
        return (
          <>
            <SiSocketdotio />
            <Typography>Web Socket</Typography>
          </>
        );
      }
      case "firebase": {
        return (
          <>
            <IoLogoFirebase />
            <Typography>Firebase</Typography>
          </>
        );
      }
      case "typescript": {
        return (
          <>
            <SiTypescript />
            <Typography>Typescript</Typography>
          </>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      {getTools()}
    </Stack>
  );
};

export default DevTool;
