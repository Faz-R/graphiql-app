import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/hooks";

const GraphIQL = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  return !isAuth ? (
    <Navigate to="/auth" />
  ) : (
    <Container>
      <h2>The most difficult content must be here</h2>
      <button
        onClick={() => {
          dispatch(removeUser());
        }}
      >
        Log Out from {email}
      </button>
    </Container>
  );
};

export default GraphIQL;
