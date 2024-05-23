import styles from "../styles/components/navbar/navBar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Nav className={styles["nav-links"]}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link
          href="https://www.linkedin.com/in/ben-workman-ds/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Link>
        <Link href="https://github.com/benw2k" target="_blank" rel="noreferrer">
          GitHub
        </Link>
      </Nav>
      <div className={styles["navbar-icons"]}>
        <a className={styles["connect-button"]} href="#">
          <span className={styles["connect-button__icon-wrapper"]}>
            <svg
              width="10"
              className={styles["connect-button__icon-svg"]}
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>

            <svg
              className={styles["connect-button__icon-svg--copy"]}
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </span>
          Contact Me
        </a>
      </div>
    </div>
  );
}
