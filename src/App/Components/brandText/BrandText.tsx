import { Stack, TypographyProps } from "@mui/material";
import { forwardRef } from "react";
import Editable from "../Editable/Editable";
import { updateDoc } from "firebase/firestore";

interface BrandTextProps extends TypographyProps {
  docRef?: any;
}

const BrandText = forwardRef((props: BrandTextProps, ref) => {
  const { docRef, children, sx, ...rest } = props;
  return (
    // @ts-ignore
    <Stack ref={ref}>
      <Editable
        TypographyProps={{
          variant: "h2",
          color: "white",
          display: children ? "contents" : "none",
          sx: {
            "&:before": {
              left: 0,
              content: '""',
              top: ".375rem",
              height: ".375rem",
              borderRadius: 999,
              width: " 3.4375rem",
              bgcolor: "primary.main",
            },
            ...sx,
          },
        }}
        onSave={async (newValue) => {
          await updateDoc(docRef, { header: newValue });
        }}
      >
        {children}
      </Editable>
    </Stack>
  );
});

export default BrandText;
