import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Component, user }: any) => {
  return (
    <Route
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};
export default PrivateRoute;
