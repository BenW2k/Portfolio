"use client";
import Image from "next/image";
import styles from "../../styles/work/synergy/synergy.module.css";
import img from "../../../public/connor_1.png";
import img2 from "../../assets/media/placeholder-image.svg";

export default function Resume() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <video autoPlay muted loop className={styles["video-background"]}>
          <source src="/green_video.mp4" type="video/mp4" />
        </video>
        <h1 className={styles["page-title"]}>Level Designer Portfolio</h1>
      </div>
      <Image src={img} className={styles.img1} alt="image" />
      <div className={styles.view}>
        <a
          href="https://connorlarkin.co.uk/home"
          rel="noreferrer"
          target="_blank"
        >
          Click here to view!
        </a>
      </div>
      <div className={styles.container1}>
        <div className={styles.section1}>
          <h3 className={styles["section-title"]}>Mission</h3>
          <div className={styles["section-body"]}>
            <p>
              ▹ Create a professional and presentable responsive personal
              portfolio for a new university graduate. Aim was to highlight his
              skills in level-design and education.
            </p>
            <p>
              ▹ Client needed a way to showcase his previous works to recruiters
              with a clean design but had no knowledge of web-development.
            </p>
          </div>
        </div>
        <div className={styles.section1}>
          <h3 className={styles["section-title"]}>Technologies</h3>
          <div className={styles["section-body"]}>
            <p>▹ Frontend: Javascript (React), CSS, HTML </p>
            <p>▹ Skills: Web Design, Web Development, Web Hosting</p>
          </div>
        </div>
      </div>
      <Image src={img} className={styles.img2} alt="image" />
      <div className={styles.container2}>
        <div className={styles.section2}>
          <h3 className={styles["section-title"]}>Features</h3>
          <div className={styles["section-body"]}>
            <p>▹ 5 page fully responsive layout</p>
            <p>▹ Functional contact form using EmailJS API</p>
            <p>▹ Scroll and hover animations</p>
          </div>
        </div>
        <div className={styles.section2}>
          <h3 className={styles["section-title"]}>Outcome</h3>
          <div className={styles["section-body"]}>
            <p> </p>
            <p>
              ▹ Client entirely satisfied and has communicated that he has
              already received interest through the contact form.
            </p>
            <p>
              ▹ Client also left a positive testimonial and has expressed his
              desire to work together in the future.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
