import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authentication/Authentication";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (user) return children;
  if (loader)
    return (
      <div className="flex justify-center items-center mt-14">
        <span className="loading loading-spinner text-success w-20"></span>
      </div>
    );

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
