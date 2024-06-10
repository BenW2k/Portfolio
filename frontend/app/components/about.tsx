import styles from "../styles/components/about.module.css";
import Image from "next/image";
import face from "../assets/media/face-nobg.png";

export default function About() {
  return (
    <div>
      <div className={styles["section-title"]}>
        <h1>ABOUT ME</h1>
      </div>
      <div className={styles["container"]}>
        <div className={styles["grid"]}>
          <div className={styles["intro"]}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              fugit soluta non expedita modi minima repellat. Quod non error qui
              totam labore sit hic cumque mollitia molestiae, quae perferendis
              architecto?
            </p>
          </div>
          <div className={styles["ml"]}>
            <h3>Machine Learning</h3>
            <p>Leveraging Data to create meaningful and impactful solutions</p>
          </div>
          <div className={styles["ml"]}>
            <h3>Data Science</h3>
            <p>Leveraging Data to create meaningful and impactful solutions</p>
          </div>
          <div className={styles["dev"]}>
            <h3>Web & Software Development</h3>
            <p>Piloting development from idea to implementation</p>
          </div>
          <div className={styles["face"]}>
            <Image
              src={face}
              className={styles["face-img"]}
              alt="Picture of the self"
            />
          </div>
          <p>yes</p>
        </div>
      </div>
    </div>
  );
}
