"use client";
import Image from "next/image";
import styles from "../../styles/work/projectPages/synergy.module.css";
import sent_1 from "../../../public/Sent_1.png";
import sent_2 from "../../../public/BI_1.png";

export default function SentimentAnalysis() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <video autoPlay muted loop className={styles["video-background"]}>
          <source src="/sentiment_header.mp4" type="video/mp4" />
        </video>
        <h1 className={styles["page-title"]}>Sentiment Dashboard</h1>
      </div>
      <div className={styles.imgContainer}>
        <Image src={sent_1} className={styles["sent-img1"]} alt="image" />
      </div>
      <div className={styles.container1}>
        <div className={styles.section1}>
          <h3 className={styles["section-title"]}>Mission</h3>
          <div className={styles["section-body"]}>
            <p>
              ▹ Create a full data pipeline for scraping and analysing the
              sentiment of Amazon product reviews.
            </p>
            <p>▹ Display the findings using a PowerBI dashboard.</p>
          </div>
        </div>
        <div className={styles.section1}>
          <h3 className={styles["section-title"]}>Technologies</h3>
          <div className={styles["section-body"]}>
            <p>▹ Libraries: NumPy, Pandas, NLTK, BeautifulSoup, TensorFlow</p>
            <p>
              ▹ Skills: Data Scraping, Data Cleaning, Sentiment Analysis, Data
              Visualisation{" "}
            </p>
          </div>
        </div>
      </div>
      <Image src={sent_2} className={styles["sent-img2"]} alt="image" />
      <div className={styles.container2}>
        <div className={styles.section2}>
          <h3 className={styles["section-title"]}>Features</h3>
          <div className={styles["section-body"]}>
            <p>▹ Automatic Data Pipeline - just provide a page link!</p>
            <p>▹ Keyword frequency chart </p>
            <p>▹ Simplistic UI</p>
          </div>
        </div>
        <div className={styles.section2}>
          <h3 className={styles["section-title"]}>Outcome</h3>
          <div className={styles["section-body"]}>
            <p> </p>
            <p>
              ▹ The application had around a 75% success rate when verifying
              existing individuals. Issues arose for the one-shot verification
              as the model was prone to overfitting to training data despite
              data augmentation and cleansing.
            </p>
            <p>
              ▹ Results were improved by storing initial images of target
              individuals and assigning them to their corresponding usernames
              and using additional data augmentation techniques.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
