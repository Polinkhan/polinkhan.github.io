import { Box, Stack, Typography } from "@mui/material";

const SkillIconWIthLabel = ({ icon, label }: any) => {
  return (
    <Stack alignItems={"center"} gap={1.5} position={"relative"} height={90} width={80}>
      <Box
        top={0}
        src={icon}
        height={60}
        component={"img"}
        position={"absolute"}
        sx={{ "&:hover": { top: -10 }, transition: "0.3s ease-in" }}
      />
      <Typography position={"absolute"} bottom={0} color={"secondary.contrastText"}>
        {label}
      </Typography>
    </Stack>
  );
};

export default SkillIconWIthLabel;
