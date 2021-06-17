import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React, { createContext } from "react";

import firebase from "firebase";
import { App } from "./App";
import { FirebaseContextProps } from "./types";
const firebaseConfig = {
  apiKey: "AIzaSyBg-_rup-O3IpgVFh640OTuEqu4LapaGeE",
  authDomain: "survey-test-antonlazurko.firebaseapp.com",
  databaseURL: "https://survey-test-antonlazurko-default-rtdb.firebaseio.com",
  projectId: "survey-test-antonlazurko",
  storageBucket: "survey-test-antonlazurko.appspot.com",
  messagingSenderId: "66259605692",
  appId: "1:66259605692:web:95b0e7181079911b5a58b9",
};
export const FirebaseContext = createContext<Partial<FirebaseContextProps>>({});
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firestore, firebase }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
