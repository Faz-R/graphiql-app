import { Container } from "@mui/material";
import Form from "../../Components/Form";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/graph");
      })
      .catch(console.error);
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Form name="Sign Up" sendData={handleRegister} />
    </Container>
  );
};

export default SignUp;
