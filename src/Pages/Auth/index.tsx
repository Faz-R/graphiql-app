import { Alert, Container, Snackbar } from "@mui/material";
import Form from "../../Components/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logInWithEmailAndPassword } from "../../firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (email: string, password: string) => {
    logInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/graph");
      })
      .catch((error: Error) => {
        if (error.message.includes("user-not-found")) {
          setErrorMessage("User not found");
        } else {
          setErrorMessage(error.message);
        }
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Form title="Sign In" sendData={handleLogin} isAuth={true} />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMessage}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default SignIn;
