"use client";
import {useEffect} from "react";
import Image from "next/image";
import styles from "./styles/pages/home.module.css";
import {easeInOut, motion, useAnimate, useInView, stagger} from "framer-motion";

export default function Home() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const heroAnimation = async () => {
        await animate("#hero-title", {opacity: 1}, {duration: 2});
        // await animate ("#hero-title", {transform: })
        await animate("#hero-paragraph", {opacity: 0.6}, {duration: 1});
      };
      heroAnimation();
    }
  }, [isInView]);

  return (
    <div ref={scope} className={styles["hero-section"]}>
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
