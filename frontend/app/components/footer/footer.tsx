import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.linkContainer}>
        <div className={styles.navContainer}>
          <p className={styles.title}>Sitemap</p>
          <a className={styles.link} href="">
            Work
          </a>
          <a className={styles.link} href="">
            Timeline
          </a>
          <a className={styles.link} href="">
            Skills
          </a>
        </div>
        <div className={styles.navContainer}>
          <div className={styles.toTop}>
            <a href="" className={styles.upIcon}>
              ↑
            </a>
            <a href="">Back to the top</a>
          </div>
        </div>
        <div className={styles.navContainer}>
          <p className={styles.title}>Socials</p>
          <a className={styles.link} href="">
            LinkedIn
          </a>
          <a className={styles.link} href="">
            GitHub
          </a>
          <a className={styles.link} href="">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
