import { Switch, Route } from "react-router-dom";
import React, { createContext, lazy, Suspense, useReducer } from "react";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/";
import { ButtonWithToggle } from "./Components/ToggleBtn";
import { spawn } from "child_process";
import { ListFormat } from "typescript";

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

boundShowDogName();
// @logClass
class User {
  constructor(public name: string, public age: number) {}
  public getPAss(): string {
    return `${this.name}${this.age}`;
  }
}
type TDate = {
  x: Date;
  b: string;
};
const abc: TDate = { x: new Date(), b: "b" };
console.dir(abc.x);

interface IA {
  name: string;
  age: number;
  sex: string;
}
interface IQwe {
  qwe: Record<IA["name"], IA>;
}
const typpedArray = new Int32Array([1, 2]);
typpedArray[2] = 3;
console.log(typpedArray[2]);

const START = "recorderType/start";
const STOP = "recorderType/stop";
type recorderType = typeof START;
const abcd: Partial<IA> = {
  name: "name",
  age: 5,
};
const newA: Omit<IA, "name" | "age"> = { sex: "male" };
console.log(newA);

interface Star {
  color?: "black" | "blue" | "red";
}

let user = {
  name: "John",
  email: "john@example.com",
};

type User1 = typeof user;

enum Fruits {
  Apple = "apple",
  Orange = "orange",
  Banana = "banana",
}
interface A {
  value: number;
}
interface B {
  value: number;
  key: string;
}
const a: A = { value: 5 };
const b: B = { value: 6, key: "key" };
export const App: React.FC = () => {
  interface IState {
    count: number;
  }
  type Action = { type: "increment" | "decrement" };
  const counterReducer = ({ count }: IState, { type }: Action) => {
    switch (type) {
      case "increment":
        return { count: count + 1 };
      case "decrement":
        return { count: count - 1 };
      default:
        return { count };
    }
  };
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container>
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
