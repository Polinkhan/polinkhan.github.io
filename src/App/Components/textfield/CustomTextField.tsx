import { FormControl, FormLabel, TextField, TextFieldProps } from "@mui/material";

const CustomTextField = ({ label, sx, required, ...rest }: TextFieldProps) => {
  return (
    <FormControl required={required}>
      <FormLabel sx={{ px: 0.5, pb: 1, fontWeight: 500, color: "white" }}>{label}</FormLabel>
      <TextField
        required={required}
        variant="standard"
        sx={{ px: 1.5, py: 1, bgcolor: "#2c2c3f", color: "white", borderRadius: 0.5, ...sx }}
        InputProps={{ style: { color: "white", fontSize: 14 }, disableUnderline: true }}
        {...rest}
      />
    </FormControl>
  );
};

export default CustomTextField;
