import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const GraphIQL = () => {
  const { isAuth } = useAuth();
  return !isAuth ? (
    <Navigate to="/auth" />
  ) : (
    <Container>
      <h2>The most difficult content must be here</h2>
    </Container>
  );
};

export default GraphIQL;
