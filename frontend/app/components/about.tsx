import styles from "../styles/components/about.module.css";
import Image from "next/image";
import SkillSlider from "./icon-slider";
import face from "../assets/media/face-nobg.png";

export default function About() {
  return (
    <div className={styles["about"]}>
      <div className={styles["section-title"]}>
        <h1>ABOUT ME</h1>
      </div>
      <div className={styles["container"]}>
        <div className={styles["grid"]}>
          <div className={`${styles["glass"]} ${styles["intro"]} `}>
            <p>
              {" "}
              A Full-stack Developer with with sub-specialties in data analytics
              and finance.
            </p>
          </div>
          <div className={`${styles["glass"]}  ${styles["ml"]}`}>
            <h3>Machine Learning</h3>
            <p>
              Building intelligent solutions that facilitate growth and success
            </p>
          </div>
          <div className={`${styles["glass"]}  ${styles["ds"]}`}>
            <h3>Data Science</h3>
            <p>Leveraging data to create meaningful and impactful solutions</p>
          </div>
          <div className={`${styles["glass"]}  ${styles["dev"]} `}>
            <h3>Web & Software Development</h3>
            <p>
              Piloting development from idea to implementation with proficiency
              in a range development tools
            </p>
          </div>
          <div className={`${styles["glass"]}  ${styles["face"]} `}>
            <Image
              src={face}
              className={styles["face-img"]}
              alt="Picture of the self"
            />
          </div>
          <div className={`${styles["glass"]}  ${styles["dummy"]} `}>Dummy</div>
        </div>
      </div>
    </div>
  );
}
