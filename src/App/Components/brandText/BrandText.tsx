import { Stack, TypographyProps } from "@mui/material";
import { forwardRef } from "react";
import Editable from "../Editable/Editable";

interface BrandTextProps extends TypographyProps {
  docRef?: any;
  onSave: (newValue: any, fieldname: string) => Promise<any>;
  fieldname: string;
}

const BrandText = forwardRef((props: BrandTextProps, ref) => {
  const { docRef, children, sx, onSave, fieldname, ...rest } = props;
  return (
    // @ts-ignore
    <Stack ref={ref}>
      <Editable
        fieldname={fieldname}
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
          ...rest,
        }}
        onSave={onSave}
      >
        {children}
      </Editable>
    </Stack>
  );
});

export default BrandText;
