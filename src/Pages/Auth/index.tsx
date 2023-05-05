import { Alert, Container, Snackbar } from "@mui/material";
import Form from "../../Components/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState as UseAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, loading, error] = UseAuthState(auth);

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
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

  return user ? (
    <Navigate to="/graph" />
  ) : (
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
