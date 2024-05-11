import { Stack } from "@mui/material";
import Section from "../../Components/section/Section";
import WorkCard, { WorkDetailsType } from "./WorkCard";
// import { useInView } from "react-intersection-observer";

import nippon from "../../../assets/images/nippon.png";
import superchat from "../../../assets/images/superchat.png";
import todo from "../../../assets/images/todo.png";
import pcMonitor from "../../../assets/images/pcMonitor.png";
import CustomButton from "../../Components/button/CustomButton";

const Work = ({}: any) => {
  // const { ref, inView } = useInView({});
  // console.log("Work", inView);

  return (
    <Section
      id="work"
      // ref={ref}
      headerText="My work"
      headerSubText="Checkout a few of my works!"
    >
      <Stack gap={4}>
        {workDetails.map((workDetail, i: any) => (
          <WorkCard key={i} index={i} workDetails={workDetail} />
        ))}
        <CustomButton variant="outlined" sx={{ alignSelf: "center" }}>
          See more
        </CustomButton>
      </Stack>
    </Section>
  );
};

const workDetails: WorkDetailsType[] = [
  {
    name: "Nippon Steel App",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias culpa minus expedita excepturi cum. Voluptatibus quas, consectetur veritatis voluptatum blanditiis quis commodi magni totam dolor sapiente soluta libero vero. Eaque, amet consectetur.",
    credential: { name: "admin", password: "123456" },
    tools: ["react-native", "express-js", "my-sql"],
    source: {
      live: "",
      github: "https://github.com/Polinkhan/Nippon-Steel/tree/v5",
    },
    img: nippon,
  },
  {
    name: "Pc Monitor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex illo officia omnis consequatur. Fugit veniam blanditiis aliquid ducimus! Iure aut ut aperiam dicta? Molestiae omnis fugit magnam commodi tempore, odio voluptatum.",
    credential: { name: "admin", password: "123456" },
    tools: ["react-native", "node-js", "typescript"],
    source: { live: "", github: "https://github.com/Polinkhan/server-monitor" },
    img: pcMonitor,
  },
  {
    name: "Super Chat 2.0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex illo officia omnis consequatur. Fugit veniam blanditiis aliquid ducimus! Iure aut ut aperiam dicta? Molestiae omnis fugit magnam commodi tempore, odio voluptatum.",
    credential: { name: "admin", password: "123456" },
    tools: ["react", "node-js", "web-socket"],
    source: { live: "", github: "https://github.com/Polinkhan/superchat" },
    img: superchat,
  },
  {
    name: "TODO App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex illo officia omnis consequatur. Fugit veniam blanditiis aliquid ducimus! Iure aut ut aperiam dicta? Molestiae omnis fugit magnam commodi tempore, odio voluptatum.",
    credential: { name: "admin", password: "123456" },
    tools: ["react-native", "firebase", "typescript"],
    source: { live: "", github: "" },
    img: todo,
  },
];

export default Work;
