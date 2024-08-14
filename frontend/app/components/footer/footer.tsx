import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.linkContainer}>
        <div className={styles.navContainer}>
          <p className={styles.title}>Sitemap</p>
          <a className={styles.link} href="#skills">
            Skills
          </a>

          <a className={styles.link} href="#timeline">
            Timeline
          </a>
          <a className={styles.link} href="#projects">
            Work
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
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/ben-workman-ds/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className={styles.link}
            href="https://www.github.com/benw2k"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a className={styles.link} href="" rel="noreferrer" target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
