"use client";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";
import {useEffect} from "react";
import Image from "next/image";
import styles from "./styles/pages/home.module.css";
import {
  easeInOut,
  motion,
  useAnimate,
  useInView,
  stagger,
  delay,
} from "framer-motion";

export default function Home() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  // useEffect(() => {
  //   if (isInView) {
  //     const heroAnimation = async () => {
  //       await animate(
  //         "#hero-title",
  //         {opacity: 1},
  //         {duration: 1, ease: "easeInOut"}
  //       );
  //       await animate("#hero-paragraph", {opacity: 1}, {duration: 1});
  //       await animate("#hero-span-1", {color: "#ffffff"}, {duration: 0.25});
  //       await animate(
  //         "#hero-span-1",
  //         {color: "#ffffff99"},
  //         {duration: 0.5, delay: 0.75}
  //       );
  //       await animate("#hero-span-2", {color: "#ffffff"}, {duration: 0.25});
  //       await animate(
  //         "#hero-span-2",
  //         {color: "#ffffff99"},
  //         {duration: 0.25, delay: 0.75}
  //       );
  //       await animate("#hero-span-3", {color: "#ffffff"}, {duration: 0.25});
  //       await animate(
  //         "#hero-span-3",
  //         {color: "#ffffff99"},
  //         {duration: 0.25, delay: 0.75}
  //       );
  //       await animate("#hero-span-4", {color: "#ffffff"}, {duration: 0.25});
  //       await animate(
  //         "#hero-span-4",
  //         {color: "#ffffff99"},
  //         {duration: 0.25, delay: 0.75}
  //       );
  //       await animate("#hero-span-5", {color: "#ffffff"}, {duration: 0.25});
  //       await animate(
  //         "#hero-span-5",
  //         {color: "#ffffff99"},
  //         {duration: 0.25, delay: 0.75}
  //       );
  //       await animate("#name-span", {color: "#66CCCC"}, {duration: 1});
  //       await animate("#navbar-div", {opacity: 1}, {duration: 1});
  //     };
  //     heroAnimation();
  //   }
  // }, [isInView]);

  return (
    <div ref={scope}>
      <div id="navbar-div" className={styles["navbar"]}>
        <Navbar />
      </div>
      <div ref={scope} className={styles["hero-section"]}>
        <h1 id="hero-title" className={styles["hero-title"]}>
          Hello
        </h1>
        <p id="hero-paragraph" className={styles["hero-paragraph"]}>
          I'm <span id="name-span">Ben Workman</span>, a{" "}
          <span id="hero-span-1">Full-stack Software Engineer</span> with
          sub-specialties in <span id="hero-span-2">Web Development</span>,{" "}
          <span id="hero-span-3">Data Science</span>,{" "}
          <span id="hero-span-4">Machine Learning</span> and
          <span id="hero-span-5"> Finance.</span>
        </p>
      </div>
      <div className={styles["timeline"]}>
        <Timeline />
      </div>
      <div className={styles["skills"]}>
        <div className={styles["dummy-container"]}>
          <p>Dummy</p>
        </div>
      </div>
    </div>
  );
}
