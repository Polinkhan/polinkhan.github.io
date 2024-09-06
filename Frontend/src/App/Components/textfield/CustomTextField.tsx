import {
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

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

type EditTextFieldProps = {
  loading: boolean;
  onSave?: () => void;
} & TextFieldProps;

export const EditTextField = ({ label, sx, required, onSave, loading, ...rest }: EditTextFieldProps) => {
  return (
    <FormControl fullWidth required={required}>
      <FormLabel sx={{ px: 0.5, pb: 1, fontWeight: 500, color: "white" }}>{label}</FormLabel>
      <Stack direction={"row"} gap={1}>
        <TextField
          disabled={loading}
          fullWidth
          required={required}
          variant="standard"
          sx={{ px: 1.5, py: 1, bgcolor: "#2c2c3f", color: "white", borderRadius: 0.5, ...sx }}
          InputProps={{ style: { color: "white", fontSize: 14 }, disableUnderline: true }}
          {...rest}
        />
        <Button disabled={loading} variant="contained" color="inherit" onClick={onSave}>
          {loading ? <CircularProgress color="inherit" size={16} /> : "Save"}
        </Button>
      </Stack>
    </FormControl>
  );
};

export const ManageTextField = ({ label, value, ...rest }: TextFieldProps) => {
  return (
    <Stack direction={"row"} gap={2} alignItems={"center"} sx={{ width: { xs: 1, sm: 450 } }}>
      <Typography variant="body2" width={150} color={"secondary.contrastText"}>
        {label} :
      </Typography>
      <TextField
        required
        size="small"
        // value={value}
        defaultValue={value}
        variant="standard"
        fullWidth
        sx={{
          px: 1.5,
          py: 1,
          borderRadius: 0.5,
          bgcolor: "secondary.main",
        }}
        InputProps={{ style: { color: "white", fontSize: 14 }, disableUnderline: true }}
        inputProps={{ style: { padding: 0 } }}
        {...rest}
      />
    </Stack>
  );
};

export default CustomTextField;
