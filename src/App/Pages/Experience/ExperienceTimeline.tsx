import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Stack, Typography } from "@mui/material";

export type ExperienceTimelineTypes = {
  companyLogo: string;
  companyName: string;
  totalWorkTime: string;
  workType: string;
  experiences: Array<{
    designation: string;
    workType: string;
    workTime: string;
  }>;
};

const ExperienceTimeline = ({ ExperienceList }: { ExperienceList: ExperienceTimelineTypes[] }) => {
  return ExperienceList.map(({ companyLogo, companyName, workType, totalWorkTime, experiences }, i) => (
    <Timeline
      key={i}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          pl: "100px",
        },
      }}
    >
      <TimelineItem sx={{ alignItems: "center" }}>
        <TimelineSeparator>
          <Box component={"img"} src={companyLogo} width={100} ml={-11} />
        </TimelineSeparator>
        <TimelineContent sx={{}}>
          <Stack height={100} justifyContent={"center"}>
            <Typography>{companyName}</Typography>
            <Typography fontSize={12}>{totalWorkTime}</Typography>
            <Typography fontSize={12} color={"grey.500"}>
              {workType}
            </Typography>
          </Stack>
        </TimelineContent>
      </TimelineItem>

      {experiences.map(({ designation, workTime, workType }, i) => {
        const isLast = i + 1 === experiences.length;
        return (
          <TimelineItem key={designation}>
            <TimelineSeparator>
              <TimelineDot />
              {!isLast && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent height={80}>
              <Typography>{designation}</Typography>
              <Typography fontSize={12}>{workType}</Typography>
              <Typography fontSize={12} color={"grey.500"}>
                {workTime}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  ));
};

export default ExperienceTimeline;
