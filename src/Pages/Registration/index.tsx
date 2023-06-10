import { Container } from "@mui/material";
import Form from "../../Components/Form";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [user] = useAuthState(auth);

  const notify = (error: string): void => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
      draggable: false,
    });
  };

  const handleRegister = (email: string, password: string) => {
    registerWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/graph");
      })
      .catch((error: Error) => {
        if (error.message.includes("email-already-in-use")) {
          notify(`${t("emailInUse")}`);
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
        <Form title={t("signUp")} sendData={handleRegister} />
      </Container>
    </>
  );
};

export default SignUp;
