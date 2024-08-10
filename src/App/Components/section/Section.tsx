import { Box, BoxProps, Container, Stack } from "@mui/material";
import BrandText from "../brandText/BrandText";
import { forwardRef } from "react";
import Editable from "../Editable/Editable";
import { updateDoc } from "firebase/firestore";

interface SectionProps extends BoxProps {
  id: string;
  docRef?: any;
  headerText?: string;
  headerSubText?: string;
}

const Section = forwardRef((props: SectionProps, ref) => {
  const { id, docRef, children, headerText, headerSubText, ...rest } = props;

  const onSave = async (newValue: any, fieldname: string) => {
    await updateDoc(docRef, { [fieldname]: newValue });
  };

  return (
    // @ts-ignore
    <div id={id} ref={ref}>
      <Box
        pb={1}
        pt={16}
        component={"section"}
        color={"white"}
        // minHeight={"100vh"}
        bgcolor={"secondary.dark"}
        {...rest}
      >
        <Container>
          <Stack pb={5} color={"white"}>
            {
              <BrandText fieldname="header" docRef={docRef} onSave={onSave}>
                {headerText}
              </BrandText>
            }
            {
              <Editable fieldname="label" onSave={onSave}>
                {headerSubText}
              </Editable>
            }
          </Stack>
          {children}
        </Container>
      </Box>
    </div>
  );
});

export default Section;
