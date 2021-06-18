import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseContext } from "../../index";
import styles from "./Navigation.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "10px",
  },
}));
const Navigation = () => {
  const { auth } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);
  const classes = useStyles();

  const handlerExitBtn = () => {
    auth.signOut();
  };

  return (
    <nav className={styles.nav}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.root}>
          <Typography variant="h6" color="inherit">
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Trendings
            </NavLink>

            <NavLink
              to="/movies"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Search movies
            </NavLink>

            {user && (
              <NavLink
                to="/favorite"
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Favorite movies
              </NavLink>
            )}
          </Typography>
          <Typography variant="h6" color="inherit">
            {!user ? (
              <NavLink
                to="/login"
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Login
              </NavLink>
            ) : (
              <>
                <span>{user?.displayName}</span>
                <Button
                  onClick={handlerExitBtn}
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={classes.button}
                  startIcon={<ExitToAppIcon />}
                >
                  Exit
                </Button>
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <div>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
        {user && (
          <NavLink
            to="/favorite"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Favorite movies
          </NavLink>
        )}
      </div>
      <div className={styles.auth}>
        {!user ? (
          <NavLink
            to="/login"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Login
          </NavLink>
        ) : (
          <button onClick={handlerExitBtn}>Выйти</button>
        )}
      </div> */}
    </nav>
  );
};
export default Navigation;
