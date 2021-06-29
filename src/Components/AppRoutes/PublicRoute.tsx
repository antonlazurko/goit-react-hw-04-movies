import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ Component, user, redirectTo, path }: any) =>
  user ? (
    <Redirect to={redirectTo} />
  ) : (
    <Route path={path} component={Component} />
  );

export default PublicRoute;
