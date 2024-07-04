import styles from "../styles/components/skills.module.css";
import {useState} from "react";

export default function Skills() {
  const [val, setVal] = useState(1);

  const handleClick = (num: number) => {
    setVal(num); // Update state on click
  };

  return (
    <div className={styles["skills"]}>
      <div className={styles["dummy-container"]}>
        <div className={styles["container-title"]}>
          <h1>Technical Skills</h1>
        </div>
        <div className={styles["accordion"]}>
          <div className={styles["skill-panel"]}>
            <button
              className={styles["skill-title"]}
              onClick={() => {
                if (val === 2) {
                  setVal(1);
                } else {
                  setVal(2);
                }
                console.log(val);
              }}
            >
              <span>✦</span>
              <h1>Software Development</h1>
            </button>
            <div
              className={
                val === 2
                  ? `${styles["skills-body"]} ${styles["show"]}`
                  : styles["hidden"]
              }
            >
              <ul className={styles["list-points"]}>
                <li>Typescript</li>
                <li>Sass</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Python</li>
                <li>Django</li>
                <li>SQL</li>
                <li>Java</li>
                <li>Spring</li>
              </ul>
            </div>
          </div>
          <button
            className={styles["skill-title"]}
            onClick={() => {
              if (val === 3) {
                setVal(1);
              } else {
                setVal(3);
              }
              console.log(val);
            }}
          >
            <span>✦</span>
            <h1>Machine Learning</h1>
          </button>
          <div
            className={
              val === 3
                ? `${styles["skills-body"]} ${styles["show"]}`
                : styles["hidden"]
            }
          >
            <ul className={styles["list-points"]}>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Scikit-Learn</li>
              <li>OpenCV</li>
              <li></li>
            </ul>
          </div>
          <button
            className={styles["skill-title"]}
            onClick={() => {
              if (val === 4) {
                setVal(1);
              } else {
                setVal(4);
              }
              console.log(val);
            }}
          >
            <span>✦</span>
            <h1>Data Science</h1>
          </button>
          <div
            className={
              val === 4
                ? `${styles["skills-body"]} ${styles["show"]}`
                : styles["hidden"]
            }
          >
            <ul className={styles["list-points"]}>
              <li>PowerBI</li>
              <li>Seaborn</li>
              <li>Matplotlib</li>
              <li>R</li>
              <li>Selenium</li>
              <li>BeautifulSoup</li>
            </ul>
          </div>
          <button
            className={styles["skill-title"]}
            onClick={() => {
              if (val === 5) {
                setVal(1);
              } else {
                setVal(5);
              }
              console.log(val);
            }}
          >
            <span>✦</span>
            <h1>Other</h1>
          </button>
          <div
            className={
              val === 5
                ? `${styles["skills-body"]} ${styles["show"]}`
                : styles["hidden"]
            }
          >
            <ul className={styles["list-points"]}>
              <li>Git</li>
              <li>Microsoft Azure</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
