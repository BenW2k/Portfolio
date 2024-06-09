import styles from "../styles/components/about.module.css";

export default function About() {
  return (
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
        <div className={styles["ml-and-ds"]}>
          <h3>Machine Learning & Data Science</h3>
        </div>
        <div className={styles["dev"]}>
          <h3>Web & Software Development</h3>
        </div>
        <div className={styles["face"]}></div>
        <p>yes</p>
      </div>
    </div>
  );
}
