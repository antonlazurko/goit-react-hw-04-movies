import styles from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import { Thing } from "@antonlazurko/mylib";

export default function AppBar() {
  return (
    <div className={styles.AppBar}>
      <Navigation />
      <Thing />
    </div>
  );
}
