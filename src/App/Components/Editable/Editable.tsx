import { IconButton, Stack, StackProps, TextFieldProps, Typography, TypographyProps } from "@mui/material";
import { useAuthContext } from "../../Hooks/Contexts/useAuthContext";
import { MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import usePopover from "../../Hooks/use-popover";
import CustomPopover from "../popover/CustomPopover";
import { EditTextField } from "../textfield/CustomTextField";

interface EditableProps {
  TypographyProps?: TypographyProps;
  StackProps?: StackProps;
  TextFielsProps?: TextFieldProps;
  children: any;
  onSave: (newValue: any) => Promise<any>;
}

const Editable = ({ StackProps, TypographyProps, TextFielsProps, children, onSave }: EditableProps) => {
  const { isLoggedIn } = useAuthContext();
  const { open, onOpen, onClose } = usePopover();
  const [input, setInput] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInput(children);
  }, [children, open]);

  return (
    <>
      <Stack direction={"row"} gap={1} alignItems={"center"} {...StackProps}>
        <Stack>
          <Typography color={"white"} textAlign={{ xs: "center", md: "start" }} {...TypographyProps}>
            {children}
          </Typography>
        </Stack>
        {isLoggedIn && (
          <IconButton onClick={onOpen}>
            <MdEdit />
          </IconButton>
        )}
      </Stack>
      <CustomPopover open={open} onClose={onClose} sx={{ width: 500 }}>
        <Stack p={3} direction={"row"}>
          <EditTextField
            loading={loading}
            label={"label"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onSave={async () => {
              setLoading(true);
              await onSave(input);
              setLoading(false);
            }}
            {...TextFielsProps}
          />
        </Stack>
      </CustomPopover>
    </>
  );
};

export default Editable;
