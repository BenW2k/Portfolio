import styles from "../styles/components/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import githubIcon from "../assets/media/nav-github.svg";
import linkedinIcon from "../assets/media/nav-linkedin.svg";

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
      <div className={styles["social-icon"]}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ben-workman-ds/"
          rel="noreferrer"
        >
          <Image src={linkedinIcon} alt="linkedin" />
        </a>
        <a target="_blank" href="https://github.com/benw2k" rel="noreferrer">
          <Image src={githubIcon} alt="github" />
        </a>
      </div>
    </div>
  );
}
