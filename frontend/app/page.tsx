import Image from "next/image";
import styles from "./styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles["hero-section"]}>
      <h1 className={styles["hero-title"]}>Hello</h1>
      <p className={styles["hero-paragraph"]}>
        I'm Ben Workman, a software engineer
      </p>
    </div>
  );
}
