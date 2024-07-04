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
  const scene = useRef(null);
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

  // const shiftUp = useTransform(scrollYProgress, [0, 1], [0]);
  return (
    <main className="relative h-screen">
      <div className={styles.sceneContainer} ref={scene}>
        <Scene />
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
          </form>
        </div>
      </motion.div>
    </main>
  );
}
