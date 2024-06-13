import styles from "../styles/components/slider.module.css";
import Image from "next/image";
import github from "../assets/media/icons/github.svg";
import css from "../assets/media/icons/css3.svg";
import docker from "../assets/media/icons/docker.svg";
import java from "../assets/media/icons/java.svg";
import javascript from "../assets/media/icons/javascript.svg";
import mysql from "../assets/media/icons/mysql.svg";
import next from "../assets/media/icons/nextjs.svg";
import pandas from "../assets/media/icons/pandas.svg";
import python from "../assets/media/icons/python.svg";
import react from "../assets/media/icons/react.svg";
import tensorflow from "../assets/media/icons/tensorflow.svg";
import typescript from "../assets/media/icons/typescript.svg";

export default function SkillSlider() {
  return (
    <div className={styles["container"]}>
      <div className={styles["skill-slider"]}>
        <Image
          src={github}
          className={styles["skill-icon"]}
          alt="github icon"
        />
        <Image src={css} className={styles["skill-icon"]} alt="css icon" />
        <Image
          src={docker}
          className={styles["skill-icon"]}
          alt="docker icon"
        />
        <Image src={java} className={styles["skill-icon"]} alt="java icon" />
        <Image
          src={javascript}
          className={styles["skill-icon"]}
          alt="javascript icon"
        />
        <Image src={mysql} className={styles["skill-icon"]} alt="mysql icon" />
        <Image src={next} className={styles["skill-icon"]} alt="nextJS icon" />
        <Image
          src={pandas}
          className={styles["skill-icon"]}
          alt="pandas icon"
        />
        <Image
          src={python}
          className={styles["skill-icon"]}
          alt="python icon"
        />
        <Image src={react} className={styles["skill-icon"]} alt="react icon" />
        <Image
          src={tensorflow}
          className={styles["skill-icon"]}
          alt="tensorflow icon"
        />
      </div>
      <div className={styles["skill-slider"]}>
        <Image
          src={github}
          className={styles["skill-icon"]}
          alt="github icon"
        />
        <Image src={css} className={styles["skill-icon"]} alt="css icon" />
        <Image
          src={docker}
          className={styles["skill-icon"]}
          alt="docker icon"
        />
        <Image src={java} className={styles["skill-icon"]} alt="java icon" />
        <Image
          src={javascript}
          className={styles["skill-icon"]}
          alt="javascript icon"
        />
        <Image src={mysql} className={styles["skill-icon"]} alt="mysql icon" />
        <Image src={next} className={styles["skill-icon"]} alt="nextJS icon" />
        <Image
          src={pandas}
          className={styles["skill-icon"]}
          alt="pandas icon"
        />
        <Image
          src={python}
          className={styles["skill-icon"]}
          alt="python icon"
        />
        <Image src={react} className={styles["skill-icon"]} alt="react icon" />
        <Image
          src={tensorflow}
          className={styles["skill-icon"]}
          alt="tensorflow icon"
        />
        <Image
          src={typescript}
          className={styles["skill-icon"]}
          alt="typescript icon"
        />
      </div>
    </div>
  );
}
