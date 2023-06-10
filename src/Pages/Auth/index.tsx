import { Container } from "@mui/material";
import Form from "../../Components/Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [user] = useAuthState(auth);

  const notify = (error: string): void => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
      draggable: false,
    });
  };

  const handleLogin = (email: string, password: string) => {
    logInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/graph");
      })
      .catch((error: Error) => {
        if (error.message.includes("user-not-found")) {
          notify(`${t("userNotFound")}`);
        } else {
          notify(error.message);
        }
      });
  };

  useEffect(() => {
    if (user) {
      <>{navigate("/")}</>;
    }
  });

  return (
    <>
      <ToastContainer theme="dark" limit={3} autoClose={3000} />
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Form title={t("signIn")} sendData={handleLogin} isAuth={true} />
      </Container>
    </>
  );
};

export default SignIn;
