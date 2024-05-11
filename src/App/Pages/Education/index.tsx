import Section from "../../Components/section/Section";
import EducationTimeline, { EducationTimelineTypes } from "./EducationTimeline";

const Education = () => {
  return (
    <Section id="education" headerText="My Education" headerSubText="Checkout my Education!">
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
