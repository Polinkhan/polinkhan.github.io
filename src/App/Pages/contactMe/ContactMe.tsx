import { Backdrop, Button, CircularProgress, Stack, Typography } from "@mui/material";
import Section from "../../Components/section/Section";
import CustomTextField from "../../Components/textfield/CustomTextField";
import CustomButton from "../../Components/button/CustomButton";
import { FormEvent, useRef, useState } from "react";
import { delay } from "../../Common/helper";
import { useSnackbar } from "notistack";

// Icons
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import useSnapshot from "../../Hooks/use-snapshot";
import { contactRef } from "../../DB/firebase.config";

const ContactMe = () => {
  const [open, setOpen] = useState(false);
  const { content } = useSnapshot({ ref: contactRef, defaultValue: { header: "...", label: "..." } });

  return (
    <Section id="contact" docRef={contactRef} headerText={content.header} headerSubText={content.label}>
      {/* <Section id="contact" headerText="Contact me" headerSubText="Feel free to contact me at anytime"> */}
      <Stack direction={{ md: "row" }} my={5} gap={10}>
        <Form setOpen={setOpen} />
        <ContactInfo />
      </Stack>
      <CustomBackDrop open={open} />
    </Section>
  );
};

const CustomBackDrop = ({ open }: { open: boolean }) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Typography>Sending your message</Typography>
        <CircularProgress color="inherit" size={16} />
      </Stack>
    </Backdrop>
  );
};

const Form = ({ setOpen }: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const ref: any = useRef();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setOpen(true);
    await delay(2000);
    enqueueSnackbar("Your message has been sent successfully", { variant: "success" });
    setOpen(false);
    ref.current.click();
  };

  return (
    <Stack flex={1} gap={3} component={"form"} onSubmit={handleSubmit}>
      <CustomTextField id="name" label={"Name"} required />
      <CustomTextField id="email" label={"Email"} type="email" required />
      <CustomTextField id="message" label={"Message"} multiline rows={10} required />
      <CustomButton type="submit" variant="outlined">
        Send Message
      </CustomButton>
      <Button type="reset" ref={ref} />
    </Stack>
  );
};

const ContactInfo = () => {
  return (
    <Stack flex={1} py={4} gap={2} alignItems={"center"}>
      <Stack direction={"row"} alignItems={"center"} gap={1.5}>
        <FaPhone />
        <Typography color={"secondary.contrastText"}>01756-160530</Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={1.5}>
        <IoMail />
        <Typography color={"secondary.contrastText"}>abusayedpolin@gmail.com</Typography>
      </Stack>
    </Stack>
  );
};

export default ContactMe;
