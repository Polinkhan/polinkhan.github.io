import { Stack, Typography, TypographyProps } from "@mui/material";
import { forwardRef } from "react";

const BrandText = forwardRef((props: TypographyProps, ref) => {
  return (
    // @ts-ignore
    <Stack ref={ref}>
      <Typography
        variant="h2"
        color={"white"}
        display={"contents"}
        sx={{
          "&:before": {
            left: 0,
            content: '""',
            top: ".375rem",
            height: ".375rem",
            borderRadius: 999,
            width: " 3.4375rem",
            bgcolor: "primary.main",
          },
        }}
        {...props}
      />
    </Stack>
  );
});

export default BrandText;
