import { NavLink } from "react-router-dom";
import React, { useContext } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseContext } from "../../index";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const { auth } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);
  const handlerExitBtn = () => {
    auth.signOut();
  };
  return (
    <nav className={styles.nav}>
      <div>
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
        <NavLink
          to="/favorite"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Favorite movies
        </NavLink>
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
      </div>
    </nav>
  );
};
export default Navigation;
