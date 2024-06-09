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
          <h1>Techniques & Skills</h1>
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
              <h1>Software Development</h1>
              <span>{val === 2 ? "-" : "+"}</span>
            </button>
            <div
              className={
                val === 2
                  ? `${styles["skills-body"]} ${styles["show"]}`
                  : styles["hidden"]
              }
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
                est asperiores, consequuntur, praesentium perspiciatis beatae
                voluptatem incidunt aut quo iusto quae magni vitae architecto,
                cum aliquid minus inventore. Laboriosam!
              </p>
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
            <h1>Machine Learning</h1>
            <span>{val === 3 ? "-" : "+"}</span>
          </button>
          <div
            className={
              val === 3
                ? `${styles["skills-body"]} ${styles["show"]}`
                : styles["hidden"]
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
              est asperiores, consequuntur, praesentium perspiciatis beatae
              voluptatem incidunt aut quo iusto quae magni vitae architecto, cum
              aliquid minus inventore. Laboriosam!
            </p>
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
            <h1>Data Science</h1>
            <span>{val === 4 ? "-" : "+"}</span>
          </button>
          <div
            className={
              val === 4
                ? `${styles["skills-body"]} ${styles["show"]}`
                : styles["hidden"]
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
              est asperiores, consequuntur, praesentium perspiciatis beatae
              voluptatem incidunt aut quo iusto quae magni vitae architecto, cum
              aliquid minus inventore. Laboriosam!
            </p>
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
            <h1>Other</h1>
            <span>{val === 5 ? "-" : "+"}</span>
          </button>
          <div
            className={
              val === 5
                ? `${styles["skills-body"]} ${styles["show"]}`
                : styles["hidden"]
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
              est asperiores, consequuntur, praesentium perspiciatis beatae
              voluptatem incidunt aut quo iusto quae magni vitae architecto, cum
              aliquid minus inventore. Laboriosam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
