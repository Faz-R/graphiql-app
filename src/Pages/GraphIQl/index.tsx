import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import GraphiQLField from "../../Components/GraphiQLField";

const GraphIQL = () => {
  const [token, setToken] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  user
    ?.getIdToken(false)
    .then((idToken) => {
      if (!token) {
        setToken(idToken);
      } else if (token !== idToken) {
        logout();
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <Container>
      <GraphiQLField />
    </Container>
  );
};

export default GraphIQL;
