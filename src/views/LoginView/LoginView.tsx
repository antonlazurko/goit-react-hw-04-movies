import { useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useLocation } from "react-router-dom";
import firebase from "firebase";

import { FirebaseContext } from "../../index";

import { TMovies } from "../../types";
import s from "../HomeView.module.css";

const LoginView: React.FC = () => {
  const { auth } = useContext(FirebaseContext);
  const location = useLocation();
  const handleAuthorize = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };
  return <button onClick={handleAuthorize}></button>;
};
export default LoginView;
