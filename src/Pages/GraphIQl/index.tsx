import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const GraphIQL = () => {
  const [user, loading, error] = useAuthState(auth);
  return !user ? (
    <Navigate to="/" />
  ) : (
    <Container>
      <h2>The most difficult content must be here</h2>
    </Container>
  );
};

export default GraphIQL;
