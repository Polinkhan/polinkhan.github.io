import Section from "../../Components/section/Section";
import { educationRef } from "../../DB/firebase.config";
import useFirebaseSnapshot from "../../Hooks/use-snapshot";
import EducationTimeline, { EducationTimelineTypes } from "./EducationTimeline";

const Education = () => {
  const { content } = useFirebaseSnapshot({ ref: educationRef, defaultValue: { header: "...", label: "..." } });

  return (
    <Section id="education" docRef={educationRef} headerText={content.header} headerSubText={content.label}>
      <EducationTimeline DegreeList={degreeList} />
    </Section>
  );
};

const degreeList: EducationTimelineTypes[] = [
  {
    institutionName: "Stamford University Bangladesh",
    degreeName: "Bachalor Of Science (CSE)",
    result: "CGPA : 3.75 (Approx)",
    duration: "January 2019 - Present",
  },
  {
    institutionName: "Dr. Mahbubur Rahman Mollah Collage",
    degreeName: "Higher School Certificate (HSC)",
    result: "GPA : 4.83",
    duration: "April 2016 - March 2018",
  },
  {
    institutionName: "Mohiuddin Badal Collegiate School",
    degreeName: "Secondary School Certificate (SSC)",
    result: "GPA: 4.94",
    duration: "January 2005 - February 2016",
  },
];

export default Education;
