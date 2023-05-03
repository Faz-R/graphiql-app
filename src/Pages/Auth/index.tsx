import { Container } from "@mui/material";
import Form from "../../Components/Form";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/graph");
      })
      .catch(() => alert("invalid user"));
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Form name="Sign In" handleClick={handleLogin} />
    </Container>
  );
};

export default SignIn;
