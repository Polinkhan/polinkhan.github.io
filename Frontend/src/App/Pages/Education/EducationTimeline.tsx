import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Stack, Typography } from "@mui/material";
import eduCap from "../../../assets/logos/educationCap.svg";
import { useResponsive } from "../../Hooks/use-responsive";

export type EducationTimelineTypes = {
  institutionName: string;
  degreeName: string;
  result: string;
  duration: string;
};

const EducationTimeline = ({ DegreeList }: { DegreeList: EducationTimelineTypes[] }) => {
  const isSmallScreen = useResponsive("down", "sm");

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          pl: isSmallScreen ? "30px" : "100px",
        },
      }}
    >
      {DegreeList.map(({ institutionName, degreeName, result, duration }, i) => {
        const isLast = i + 1 === DegreeList.length;
        return (
          <TimelineItem key={degreeName}>
            <TimelineSeparator>
              <TimelineDot>
                <Box component={"img"} src={eduCap} height={24} />
              </TimelineDot>
              {!isLast && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent height={isSmallScreen ? 80 : 50} mb={10}>
              <Stack gap={0.5}>
                <Typography>{institutionName}</Typography>
                <Typography fontSize={12}>{degreeName}</Typography>
                <Typography fontSize={12}>{result}</Typography>
                <Typography fontSize={12} color={"grey.500"}>
                  {duration}
                </Typography>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default EducationTimeline;
