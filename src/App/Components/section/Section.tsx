import { Box, BoxProps, Container, Stack, Typography } from "@mui/material";
import BrandText from "../brandText/BrandText";
import { forwardRef } from "react";

interface SectionProps extends BoxProps {
  id: string;
  headerText?: string;
  headerSubText?: string;
}

const Section = forwardRef((props: SectionProps, ref) => {
  const { id, children, headerText, headerSubText, ...rest } = props;
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
          <Stack color={"white"}>
            {headerText && <BrandText>{headerText}</BrandText>}
            {headerSubText && (
              <Typography pt={1} pb={4}>
                {headerSubText}
              </Typography>
            )}
          </Stack>
          {children}
        </Container>
      </Box>
    </div>
  );
});

export default Section;
