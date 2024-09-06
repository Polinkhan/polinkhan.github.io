// import { useInView } from "react-intersection-observer";
import { Stack } from "@mui/material";
import Section from "../../Components/section/Section";
import SkillIconWIthLabel from "./SkillIconWIthLabel";

// Icons
import html from "../../../assets/logos/html5.svg";
import css3 from "../../../assets/logos/css3.svg";
import javascript from "../../../assets/logos/javascript.svg";
import react from "../../../assets/logos/react.svg";
import typescript from "../../../assets/logos/typescript.svg";
import php from "../../../assets/logos/php.svg";
import postgresql from "../../../assets/logos/postgresql.svg";
import nodejs from "../../../assets/logos/nodejs.svg";
import express from "../../../assets/logos/express.svg";
import mongodb from "../../../assets/logos/mongodb.svg";
import mysql from "../../../assets/logos/Mysql.png";
import python from "../../../assets/logos/Python.png";
import reactNative from "../../../assets/logos/ReactNative.png";
import { skillRef } from "../../DB/firebase.config";
import useFirebaseSnapshot from "../../Hooks/use-snapshot";

const Skill = () => {
  // const { ref, inView } = useInView({});
  // console.log("Skill", inView);

  const { content } = useFirebaseSnapshot({ ref: skillRef, defaultValue: { header: "...", label: "..." } });

  return (
    <Section
      id="skill"
      // ref={ref}
      docRef={skillRef}
      headerText={content?.header}
      headerSubText={content?.label}
    >
      <Stack gap={5} direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
        {skillList.map((skill) => (
          <SkillIconWIthLabel key={skill.label} {...skill} />
        ))}
      </Stack>
    </Section>
  );
};

const skillList = [
  { label: "HTML", icon: html },
  { label: "CSS", icon: css3 },
  { label: "JAVASCRIPT", icon: javascript },
  { label: "REACT", icon: react },
  { label: "TYPESCRIPT", icon: typescript },
  { label: "PHP", icon: php },
  { label: "POSTGRESQL", icon: postgresql },
  { label: "NODEJS", icon: nodejs },
  { label: "EXPRESS", icon: express },
  { label: "MONGODB", icon: mongodb },
  { label: "PYTHON", icon: python },
  { label: "MySQL", icon: mysql },
  { label: "RN", icon: reactNative },
];

export default Skill;
