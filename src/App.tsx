import { Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/";
import { ButtonWithToggle } from "./Components/ToggleBtn";
import AdminForm from "./Components/AdminForm/AdminForm";
import { TAdminCredentials } from "./types";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBg-_rup-O3IpgVFh640OTuEqu4LapaGeE",
  authDomain: "survey-test-antonlazurko.firebaseapp.com",
  databaseURL: "https://survey-test-antonlazurko-default-rtdb.firebaseio.com",
  projectId: "survey-test-antonlazurko",
  storageBucket: "survey-test-antonlazurko.appspot.com",
  messagingSenderId: "66259605692",
  appId: "1:66259605692:web:95b0e7181079911b5a58b9",
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
// import HomeView from '../src/views/HomeView';
// import MoviesView from '../src/views/MoviesView';
// import NotFoundViews from './views/NotFoundView';
// import MovieDetailsPage from './views/MovieDetailsPage';
const HomeView = lazy(
  () => import("./views/HomeView" /*webpackChunkName: "HomeView" */)
);
const MoviesView = lazy(
  () => import("./views/MoviesView" /*webpackChunkName: "MoviesView" */)
);
const MovieDetailsPage = lazy(
  () =>
    import("./views/MovieDetailsPage" /*webpackChunkName: "MovieDetailsPage" */)
);
export const App: React.FC = () => {
  const [answers, loading, error] = useCollectionData(
    firestore.collection("answers").orderBy("createdAt"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const handleSubmit = (credentials: TAdminCredentials) => {
    firestore.collection("answers").add({
      ...credentials,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <Container>
      {!loading && <AdminForm onSubmit={handleSubmit} />}
      {!loading && (
        <div>
          {answers ? (
            answers.map((item) => (
              <div key={item.createdAt}>
                <hr />
                Question: {item.question}
                <br />
                Answer: {item.answer}
              </div>
            ))
          ) : (
            <div>{error}</div>
          )}
        </div>
      )}
      <AppBar />
      <ButtonWithToggle primeTitle="PRIMETITLE" secTitle="SECTITLE" />

      <Suspense fallback={<div>Downloading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/movies">
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};
