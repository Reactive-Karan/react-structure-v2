import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const getToken = "ABC";

  if (!getToken?.length) {
    return <Navigate to="/login" />;
  } else if (getToken?.length) {
    return children;
  } else {
    return <Navigate to="/notpermitted" />;
  }
};

export default RequireAuth;
