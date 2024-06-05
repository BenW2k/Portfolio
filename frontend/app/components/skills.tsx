import styles from "../styles/components/skills.module.css";
import Accordion from "react-bootstrap/Accordion";

export default function Skills() {
  const data = [
    {
      name: "Software Development",
      answer: "lorem ipsum 1",
    },
    {
      name: "Machine Learning",
      answer: "lorem ipsum 2",
    },
    {
      name: "Data Science",
      answer: "lorem ipsum 3",
    },
    {
      name: "Other",
      answer: "lorem ipsum 4",
    },
  ];
  return (
    <div className={styles["skills"]}>
      <div className={styles["dummy-container"]}>
        <button className={styles["skills-title"]}>
          <h1>Skills</h1>
        </button>
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
