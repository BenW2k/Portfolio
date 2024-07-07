import styles from "../styles/work/synergy/synergy.module.css";

export default function Synergy() {
  return (
    <div className={styles.container1}>
      <div className={styles.section1}>
        <h3 className={styles["section-title"]}>Mission</h3>
        <div className={styles["section-body"]}>
          <p>Frontend: Typescript, Sass, React, NextJS </p>
          <p>Backend: Python: Django, SQL: MySQL, Java: Spring </p>
        </div>
      </div>
      <div className={styles.section1}>
        <h3 className={styles["section-title"]}>Technologies</h3>
        <div className={styles["section-body"]}>
          <p>Frontend: </p>
          <p>Backend: </p>
          <p>Skills: </p>
        </div>
      </div>
      <div className={styles.section2}></div>
    </div>
  );
}
