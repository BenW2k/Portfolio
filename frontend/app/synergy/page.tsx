"use client";
import Image from "next/image";
import styles from "../styles/work/synergy/synergy.module.css";
import img from "../assets/media/placeholder-image.svg";

export default function Synergy() {
  return (
    <div className={styles.content}>
      <Image src={img} className={styles.img1} alt="image" />
      <div className={styles.container1}>
        <div className={styles.section1}>
          <h3 className={styles["section-title"]}>Mission</h3>
          <div className={styles["section-body"]}>
            <p>
              Create a web application to track attendance data of workers at
              Synergy Construction.
            </p>
            <p>
              Client was using traditional paper sign-in sheets creating
              difficulties surrounding long-term attendance tracking and data
              upkeep.
            </p>
          </div>
        </div>
        <div className={styles.section1}>
          <h3 className={styles["section-title"]}>Technologies</h3>
          <div className={styles["section-body"]}>
            <p>Frontend: Typescript (React), Sass, HTML </p>
            <p>Backend: Python (Django), SQL (MySQL)</p>
            <p>
              Skills: API routing, Database Management, Automation, System
              Design{" "}
            </p>
          </div>
        </div>
      </div>
      <Image src={img} className={styles.img2} alt="image" />
      <div className={styles.container2}>
        <div className={styles.section2}>
          <h3 className={styles["section-title"]}>Features</h3>
          <div className={styles["section-body"]}>
            <p>Sign-in/Sign-out page for workers</p>
            <p>Admin login with analytics dashboard</p>
            <p>Weekly data back-ups</p>
          </div>
        </div>
        <div className={styles.section2}>
          <h3 className={styles["section-title"]}>Outcome</h3>
          <div className={styles["section-body"]}>
            <p> </p>
            <p>Backend: </p>
            <p>Skills: </p>
          </div>
        </div>
      </div>
    </div>
  );
}
