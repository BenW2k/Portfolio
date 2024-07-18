import dynamic from "next/dynamic";
import styles from "../../styles/components/contact.module.css";
import {useState, useRef, useEffect} from "react";
import {useScroll, motion, useTransform} from "framer-motion";
import Lenis from "lenis";
import emailjs from "@emailjs/browser";
import {formKey} from "./keys";

const Scene = dynamic(() => import("@/app/components/contact/Scene"), {
  ssr: false,
});

export default function Contact() {
  const container = useRef<HTMLInputElement>(null);
  const scene = useRef(null);
  const stickyMask = useRef<HTMLInputElement>(null);
  const {scrollYProgress} = useScroll({
    target: scene,
    offset: ["start start", "center center"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const initialMaskSize = 0.8;

  const targetMaskSize = 30;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (!stickyMask.current || !container.current) {
      return; // Handle the case where refs are not yet assigned
    }
    const maskSizeProgress = targetMaskSize * getScrollProgress();

    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const containerRect = container.current?.getBoundingClientRect();
    if (!stickyMask.current || !containerRect) {
      return 0; // Handle the case where containerRect is null
    }
    const scrollProgress =
      stickyMask.current.offsetTop /
      (containerRect.height - window.innerHeight);

    return scrollProgress;
  };

  // const shiftUp = useTransform(scrollYProgress, [0, 1], [0]);
  return (
    <main className="relative h-screen">
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles["sticky-mask"]}>
          <div className={styles.sceneContainer} ref={scene}>
            <Scene />
          </div>
        </div>
      </div>

      <motion.div className={styles.contactForm}>
        <div className={styles.formContainer}>
          <h2 className={styles.contactTitle}>Drop Me A Message</h2>
          <form className={styles.form}>
            {/* <label>
              {" "}
              "My Name" <p>*</p>
            </label> */}

            <div className={styles.question}>
              <p>
                Name<span> *</span>
              </p>
              <input
                type="text"
                className={styles.field}
                placeholder="John Doe"
              />
            </div>
            <div className={styles.question}>
              <p>
                Email Address<span> *</span>
              </p>
              <input
                type="text"
                className={styles.field}
                placeholder="john@doe.com"
              />
            </div>
            <div className={styles.question}>
              <p>
                Message<span> *</span>
              </p>
              <input
                type="text"
                className={`${styles.field} ${styles.message}`}
                placeholder="Example Text"
              />
            </div>
            <div className={styles.submitContainer}>
              <button className={styles.submit}>Send</button>
            </div>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
