import { Box, Collapse, Icon, Stack, Typography } from "@mui/material";
import BrandText from "../../Components/brandText/BrandText";
import LinkButton from "../../Components/button/LinkButton";
import { FaEye, FaGithub } from "react-icons/fa";
import DevTool from "./DevTool";
import { useResponsive } from "../../Hooks/use-responsive";
import useBoolean from "../../Hooks/use-boolean";
import { FaAngleDown } from "react-icons/fa6";
import { updateDoc } from "firebase/firestore";
import { workRef } from "../../DB/firebase.config";
import Editable from "../../Components/Editable/Editable";
import { useAuthContext } from "../../Hooks/Contexts/useAuthContext";

export type WorkListType = {
  name: string;
  description: string;
  credentials: {
    username: string;
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
  workList: WorkListType[];
}

const WorkCard = ({ index, workList }: WorkCardProps) => {
  const isMediumScreen = useResponsive("up", "md");
  const isOdd = !isMediumScreen || index % 2 == 0;

  const workDetails = workList[index];

  return (
    <Stack p={{ xs: 2, md: 5 }} bgcolor={"secondary.main"} direction={{ md: "row" }} gap={5} borderRadius={1.5}>
      {isOdd && <Banner src={workDetails?.img} />}
      <Details index={index} workList={workList} />
      {!isOdd && <Banner src={workDetails?.img} />}
    </Stack>
  );
};

const Details = ({ index, workList }: { index: number; workList: WorkListType[] }) => {
  const { isLoggedIn } = useAuthContext();
  const { open, onToggle } = useBoolean();
  const isMediumScreen = useResponsive("up", "md");

  const workDetails = workList[index];
  console.log(workDetails);

  const onSave = async (newValue: string, fieldname: string) => {
    const newData = [...workList];
    newData[index] = { ...newData[index], [fieldname]: newValue };
    await updateDoc(workRef, { workList: newData });
  };

  const onSaveArray = async (newValue: string, fieldname: string) => {
    const newData = [...workList];
    newData[index] = { ...newData[index], [fieldname]: newValue.split(" ") };
    await updateDoc(workRef, { workList: newData });
  };

  const onSaveNested = async (newValue: string, fieldname: string) => {
    const [parrent, child] = fieldname.split(".");

    const newData: any = [...workList];
    newData[index] = { ...newData[index], [parrent]: { ...newData[index][parrent], [child]: newValue } };
    await updateDoc(workRef, { workList: newData });
  };

  return (
    <Stack flex={1} justifyContent={"space-between"}>
      <BrandText fieldname="name" variant="h5" onSave={onSave}>
        {workDetails?.name}
      </BrandText>

      {!isMediumScreen && (
        <Stack direction={"row"} alignItems={"center"} gap={1} sx={{ cursor: "pointer" }} onClick={onToggle}>
          <Typography py={2} color={"grey.500"} variant="body2">
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
        <Editable
          onSave={onSave}
          fieldname="description"
          TypographyProps={{ py: 3, color: "grey.500", variant: "body2" }}
        >
          {workDetails?.description}
        </Editable>

        <Stack color={"grey.500"} pb={3}>
          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Name : </Typography>
            <Editable
              onSave={onSaveNested}
              fieldname="credentials.username"
              TypographyProps={{ variant: "body2", color: "grey.500" }}
            >
              {workDetails?.credentials?.username}
            </Editable>
          </Stack>

          <Stack direction={"row"} gap={1}>
            <Typography variant="body2">Password : </Typography>
            <Editable
              onSave={onSaveNested}
              fieldname="credentials.password"
              TypographyProps={{ variant: "body2", color: "grey.500" }}
            >
              {workDetails?.credentials?.password}
            </Editable>
          </Stack>
        </Stack>
      </Collapse>

      {isLoggedIn && (
        <Editable
          fieldname="tools"
          TypographyProps={{ variant: "body2", color: "grey.500" }}
          onSave={onSaveArray}
          TextFielsProps={{ helperText: "Space separated text" }}
        >
          {workDetails?.tools === undefined || workDetails?.tools.length === 0 ? "Add" : workDetails?.tools?.join(" ")}
        </Editable>
      )}

      <Stack direction={"row"} color={"grey.500"} gap={2} pb={3}>
        {workDetails?.tools?.map((tool, i) => (
          <DevTool name={tool} key={i} />
        ))}
      </Stack>

      <Stack direction={"row"} gap={3}>
        <LinkButton component={"a"} href={workDetails?.source?.live} startIcon={<FaEye />}>
          Live
        </LinkButton>
        <LinkButton component={"a"} href={workDetails?.source?.github} startIcon={<FaGithub />}>
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
