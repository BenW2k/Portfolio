import dynamic from "next/dynamic";
import styles from "../../styles/components/contact.module.css";
import {useState, useRef, useEffect} from "react";
import {useScroll, motion, useTransform} from "framer-motion";
import Lenis from "lenis";
import emailjs from "@emailjs/browser";
import {formKey} from "./keys";
import next from "next";

const Scene = dynamic(() => import("@/app/components/contact/Scene"), {
  ssr: false,
});

export default function Contact() {
  const container = useRef<HTMLInputElement>(null);
  const scene = useRef(null);
  const stickyMask = useRef<HTMLInputElement>(null);

  const form = useRef();
  const [message, setMessage] = useState("Message");
  const [messageClass, setMessageClass] = useState("test");

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) {
      throw new Error("Error: Missing field");
    }

    emailjs
      .sendForm("gmail", "resume_template", form.current, {
        publicKey: formKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessageClass("success");
          console.log(messageClass);
          setMessage("Your Message has been sent!");
          setTimeout(() => {
            setMessage("Message");
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessageClass("hello");
          setMessage("Error! Please try again later.");
          console.log(messageClass);
          setTimeout(() => {
            setMessage("Message");
          }, 4000);
        }
      );
    e.target.reset();
  };

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
          {/* <video autoPlay muted loop className={styles["video-background"]}>
            <source src="/globe_video.mp4" type="video/mp4" />
          </video> */}
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
