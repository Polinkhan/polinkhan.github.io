import CustomButton, { CustomButtonProps } from "./CustomButton";

const LinkButton = (props: CustomButtonProps) => {
  return <CustomButton {...props} color="secondary" sx={{ px: 2.5, bgcolor: "secondary.light" }} />;
};

export default LinkButton;
