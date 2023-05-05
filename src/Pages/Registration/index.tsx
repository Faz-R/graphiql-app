import { Alert, Container, Snackbar } from "@mui/material";
import Form from "../../Components/Form";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import { useEffect, useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user] = useAuthState(auth);
  const handleRegister = (email: string, password: string) => {
    registerWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/graph");
      })
      .catch((error: Error) => {
        if (error.message.includes("email-already-in-use")) {
          setErrorMessage("Email already in use");
        } else {
          setErrorMessage(error.message);
        }
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
    setErrorMessage("");
  };

  useEffect(() => {
    if (user) {
      <>{navigate("/")}</>;
    }
  });
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Form title="Sign Up" sendData={handleRegister} />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignUp;
