import Section from "../../Components/section/Section";

// Logo
import BrotecsLogo from "../../../assets/logos/Brotecs.png";
import ExperienceTimeline, { ExperienceTimelineTypes } from "./ExperienceTimeline";
import { getCurrentMonthDiff } from "../../Common/helper";
import { experienceRef } from "../../DB/firebase.config";
import useFirebaseSnapshot from "../../Hooks/use-snapshot";

const Experience = () => {
  const { content } = useFirebaseSnapshot({ ref: experienceRef, defaultValue: { header: "...", label: "..." } });
  return (
    <Section id="experience" docRef={experienceRef} headerText={content?.header} headerSubText={content.label}>
      <ExperienceTimeline ExperienceList={ExperienceList} />
    </Section>
  );
};

const ExperienceList: ExperienceTimelineTypes[] = [
  {
    companyLogo: BrotecsLogo,
    companyName: "Brotecs Technologies Ltd.",
    totalWorkTime: `${getCurrentMonthDiff("06-01-23")}`,
    workType: "Dhaka, Bangladesh (On-site)",
    experiences: [
      {
        designation: "Junior Software Engineer",
        workType: "Full-time",
        workTime: `Dec 2023 - Present (${getCurrentMonthDiff("12-01-23")})`,
      },
      {
        designation: "Software Engineer Intern",
        workType: "Internship",
        workTime: "Jun 2023 - Nov 2023 (6 mos)",
      },
    ],
  },
];

export default Experience;
