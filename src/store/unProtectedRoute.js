import {Navigate} from 'react-router-dom';

const UnProtectedRoute = ({ isLoggedIn, children }) => {
    if (isLoggedIn) {
      return <Navigate to="/feed" replace />;
    }
    return children;
  };

  export default UnProtectedRoute;