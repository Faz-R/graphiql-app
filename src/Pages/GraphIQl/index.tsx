import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import GraphiQLField from "../../Components/GraphiQLField";

const GraphIQL = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

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
