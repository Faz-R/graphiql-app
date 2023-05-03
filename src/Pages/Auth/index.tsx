import { Alert, Container, Snackbar } from "@mui/material";
import Form from "../../Components/Form";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useState } from "react";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setOpen(true);
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/graph");
      })
      .catch(() => setOpen(true));
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Form name="Sign In" sendData={handleLogin} />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            User don't exist!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default SignIn;
