import styles from "../styles/components/skills.module.css";

export default function Skills() {
  return (
    <div className={styles["skills"]}>
      <div className={styles["dummy-container"]}>
        <div className={styles["skills-heading"]}>
          <h1>Skills</h1>
        </div>
        <div className={styles["skill-panel"]}>
          <h1>Software Development</h1>
        </div>
        <div className={styles["skill-panel"]}>
          <h1>Machine Learning</h1>
        </div>
        <div className={styles["skill-panel"]}>
          <h1>Data Science</h1>
        </div>
        <div className={styles["skill-panel"]}>
          <h1>Other</h1>
        </div>
      </div>
    </div>
  );
}
