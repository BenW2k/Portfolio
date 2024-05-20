"use client";

import Image from "next/image";
import styles from "./styles/pages/home.module.css";
import {motion, useAnimate} from "framer-motion";

export default function Home() {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    animate("#hero-title", {opacity: 1}, {duration: 0.5});
    // animate("#hero-paragraph", {opacity: 1});
    // animate("#hero-paragraph", {opacity: 1});
  };

  return (
    <div
      ref={scope}
      onLoad={() => handleAnimate()}
      className={styles["hero-section"]}
    >
      <h1 id="hero-title" className={styles["hero-title"]}>
        Hello
      </h1>
      <p id="hero-paragraph" className={styles["hero-paragraph"]}>
        I'm Ben Workman, a Full-stack Software Engineer with sub-specialties in
        Web Development, Data Science, Machine Learning and Finance.
      </p>
    </div>
  );
}
