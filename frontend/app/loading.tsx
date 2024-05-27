import styles from "./styles/pages/loading.module.css";

export default function Loading() {
  return (
    <div className="loader">
      <span className={styles["bar"]}></span>
      <span className={styles["bar"]}></span>
      <span className={styles["bar"]}></span>
    </div>
  );
}
