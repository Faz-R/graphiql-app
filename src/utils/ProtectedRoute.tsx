import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import Loader from "../Components/Loader";

interface ProtectedRouteProps {
  children: JSX.Element;
  route: string;
  isOtherWay?: boolean;
}

const ProtectedRoute = ({
  children,
  route,
  isOtherWay = true,
}: ProtectedRouteProps) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }

  if (user && isOtherWay) {
    return <Navigate to={route} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
