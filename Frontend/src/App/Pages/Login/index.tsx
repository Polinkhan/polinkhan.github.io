import { Button, CircularProgress, Container, Stack, Typography } from "@mui/material";
import CustomTextField from "../../Components/textfield/CustomTextField";
import { FormEvent, useEffect, useState } from "react";
import { passcodeRef } from "../../DB/firebase.config";
import { getDoc } from "firebase/firestore";
import Slide from "../../Components/animate/Slide";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/Contexts/useAuthContext";
import { FaArrowLeft } from "react-icons/fa6";

const Login = () => {
  const [passcode, setpasscode] = useState();
  const [myIp, setMyIp] = useState("...");

  useEffect(() => {
    getDoc(passcodeRef).then((data) => {
      setpasscode(data.data()?.passcode as any);
    });

    fetch("https://api.ipify.org/?format=json")
      .then((data) => data.json())
      .then((data) => setMyIp(data?.ip));
  }, []);

  return (
    <Stack bgcolor={"secondary.dark"} sx={{ height: "100vh", color: "grey.500" }}>
      <Typography p={5} textAlign={"right"}>
        Your IP : {myIp}
      </Typography>
      <Container sx={{ height: 1 }}>
        <Stack height={1} justifyContent={"center"} alignItems={"center"}>
          {passcode ? <LoginForm passcode={passcode} /> : <CircularProgress />}
        </Stack>
      </Container>
    </Stack>
  );
};

const LoginForm = ({ passcode }: { passcode: string }) => {
  const navigate = useNavigate();
  const { init } = useAuthContext();
  const [input, setInput] = useState<any>();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (input === passcode) {
      sessionStorage.setItem("login", "true");
      enqueueSnackbar("Welcome Admin", { variant: "success" });
      init();
      navigate("/", { replace: true });
    } else {
      enqueueSnackbar("Wrong Passcode", { variant: "error" });
    }
  };

  return (
    <Slide withFade from="Down" style={{}}>
      <Stack gap={4} component={"form"} onSubmit={handleSubmit} alignItems={"flex-start"}>
        <CustomTextField
          required
          autoFocus
          id="passcode"
          label={"Passcode"}
          sx={{ width: { xs: 1, sm: 450 } }}
          onChange={(e) => setInput(e.target.value)}
          helperText={"Press enter to continue"}
        />
        <Button color="inherit" size="small" startIcon={<FaArrowLeft />} onClick={() => navigate("/")}>
          Back
        </Button>
      </Stack>
    </Slide>
  );
};

export default Login;
