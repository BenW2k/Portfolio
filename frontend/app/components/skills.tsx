import Image from "next/image";
import styles from "../styles/components/skills-test.module.css";
import book from "../assets/media/skills.jpg";
import SkillSlider from "./icon-slider";

export default function Skills() {
  return (
    <div>
      <div className={styles.skills}>
        <h1> My Technical Skills</h1>
        {/* <div className={styles.title}>
          <h1 className={styles.t1}>
            <span>My</span>Problem
          </h1>
          <h1 className={styles.t2}>Solving Powers</h1>
        </div> */}
        <Image src={book} className={styles.book} alt="book-img" />
        <div className={styles.container}>
          <div className={styles.section}>
            <h3 className={styles["section-title"]}>Software Development</h3>
            <div className={styles["section-body"]}>
              <p>Frontend: Typescript, Sass, React, NextJS </p>
              <p>Backend: Python: Django, SQL: MySQL, Java: Spring </p>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles["section-title"]}>Machine Learning</h3>
            <div className={styles["section-body"]}>
              <p>Deep Learning: TensorFlow, PyTorch, Keras </p>
              <p>Computer Vision: OpenCV </p>
              <p>Other: Jupyter, Scikit-Learn, XGBoost, NLTK </p>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles["section-title"]}>Data Science</h3>
            <div className={styles["section-body"]}>
              <p>Visualisation: PowerBI, Seaborn, Matplotlib, R </p>
              <p>Data Wrangling: Pandas, NumPy, Selenium, BeautifulSoup</p>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles["section-title"]}>Other</h3>
            <div className={styles["section-body"]}>
              <p>
                Miscellaneous: Git, Microsoft Azure, Jira, Unit testing, Excel{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["logo-slider"]}>
        <SkillSlider />
      </div>
    </div>
  );
}
