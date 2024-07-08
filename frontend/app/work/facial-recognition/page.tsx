"use client";
import Image from "next/image";
import styles from "../../styles/work/synergy/synergy.module.css";
import img from "../../assets/media/placeholder-image.svg";

export default function FacialRecognition() {
  const toRotate = ["Personal Project", "Facial Recognition"];

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1 className={styles["page-title"]}>Facial Recognition</h1>
      </div>
      <Image src={img} className={styles.img1} alt="image" />
      <div className={styles.container1}>
        <div className={styles.section1}>
          <h3 className={styles["section-title"]}>Mission</h3>
          <div className={styles["section-body"]}>
            <p>
              Create a facial recognition application from scratch using neural
              networks.
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
            <p>Libraries: NumPy, Pandas, OpenCV, Kivy (Python), TensorFlow</p>
            <p>Techniques: Siamese Neural Networks, </p>
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
            <p>Real-time facial recognition support</p>
            <p>Simplistic UI</p>
          </div>
        </div>
        <div className={styles.section2}>
          <h3 className={styles["section-title"]}>Outcome</h3>
          <div className={styles["section-body"]}>
            <p> </p>
            <p>
              The application had around a 75% success rate when verifying
              existing individuals. Issues arose for the one-shot verification
              as the model was prone to overfitting to training data despite
              data augmentation and cleansing.
            </p>
            <p>
              Results were improved by storing initial images of target
              individuals and assigning them to their corresponding usernames
              and using additional data augmentation techniques.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
