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
            <Typography variant="body2">React Native</Typography>
          </>
        );
      }
      case "react": {
        return (
          <>
            <FaReact />
            <Typography variant="body2">React</Typography>
          </>
        );
      }
      case "node-js": {
        return (
          <>
            <FaNodeJs />
            <Typography variant="body2">Node JS</Typography>
          </>
        );
      }
      case "express-js": {
        return (
          <>
            <SiExpress />
            <Typography variant="body2">Express JS</Typography>
          </>
        );
      }
      case "my-sql": {
        return (
          <>
            <GrMysql />
            <Typography variant="body2">MySQL</Typography>
          </>
        );
      }
      case "web-socket": {
        return (
          <>
            <SiSocketdotio />
            <Typography variant="body2">Web Socket</Typography>
          </>
        );
      }
      case "firebase": {
        return (
          <>
            <IoLogoFirebase />
            <Typography variant="body2">Firebase</Typography>
          </>
        );
      }
      case "typescript": {
        return (
          <>
            <SiTypescript />
            <Typography variant="body2">Typescript</Typography>
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
