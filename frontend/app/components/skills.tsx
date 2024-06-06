import styles from "../styles/components/skills.module.css";
import useState from "react";

export default function Skills() {
  return (
    <div className={styles["skills"]}>
      <div className={styles["dummy-container"]}>
        <div className={styles["container-title"]}>
          <h1>Skills</h1>
        </div>
        <div className={styles["skill-panel"]}>
          <button className={styles["skill-title"]}>
            <h1>Software Development</h1>
            <span>+</span>
          </button>
          <div className={styles["skills-body"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
              est asperiores, consequuntur, praesentium perspiciatis beatae
              voluptatem incidunt aut quo iusto quae magni vitae architecto, cum
              aliquid minus inventore. Laboriosam!
            </p>
          </div>
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
