import styles from "../../styles/components/timeline.module.css";
import {useEffect, useRef} from "react";
import Image from "next/image";
import placeholder from "../../assets/media/placeholder-image.svg";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Timeline() {
  const container = useRef(null);
  // const {height} = useDimension();
  const {scrollYProgress} = useScroll({
    target: container,
    // offset: ["start start", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className={styles["timeline-container"]}>
      <div ref={container} className={styles["timeline"]}>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{amount: "all"}}
          className={styles["timeline-header"]}
        >
          <h1>Timeline</h1>
        </motion.div>

        <div className={styles.framerContainer}>
          <div className={styles["vertical-line"]}></div>
          <div>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{amount: "all"}}
              className={`${styles["container"]} ${styles["point1"]}`}
            >
              <div className={`${styles["text-box"]} ${styles["left-side"]}`}>
                <h2>BSc Business Management</h2>
                <h4>Swansea University</h4>
                <small>Oct 2018 - July 2021</small>
                <p>
                  {" "}
                  Grade: Upper Second-Class Honours.
                  <br />
                  Final Project: Data Analyst role in a collaborative project
                  with a Welsh financial consulting company. Earned a CMI Level
                  5 Certificate in Management and Leadership and awarded the
                  Bronze Entrepreneurship Award.
                </p>
              </div>
              <div
                className={`${styles["roadmap-point"]} ${styles["left"]}`}
              ></div>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{amount: "all"}}
              className={`${styles["container"]} ${styles["point2"]}`}
            >
              <div className={`${styles["text-box"]} ${styles["right-side"]}`}>
                <h2>MSc Financial Technology</h2>
                <h4>Swansea University</h4>
                <small>Sept 2023 - Nov 2023</small>
                <p>
                  {" "}
                  Grade: Upper Second-Class Honours.
                  <br /> Relevant Coursework: Introduction to programming in
                  Java - Big Data in Finance - Machine Learning - Quantitative
                  Methods and Economics. <br />
                  Thesis: How AI will affect the future of banking: An
                  industrial Analysis report.
                </p>
              </div>
              <div
                className={`${styles["roadmap-point"]} ${styles["right"]}`}
              ></div>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{amount: "all"}}
              className={`${styles["container"]} ${styles["point-3"]}`}
            >
              <div className={`${styles["text-box"]} ${styles["left-side"]}`}>
                <h2>Placeholder Name</h2>
                <h4>Synergy Construction Ltd.</h4>
                <small>Sept 2023 - Nov 2023</small>
                <p>
                  {" "}
                  Worked on a split whereby for 3 days of the week I was on site
                  completing labouring tasks and 2 days of the week I was
                  working on an attendance tracking system to take the company
                  away from paper registration.
                </p>
              </div>
              <div
                className={`${styles["roadmap-point"]} ${styles["left"]}`}
              ></div>
            </motion.div>
            <motion.div
              ref={container}
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{amount: "all"}}
              className={`${styles["container"]} ${styles["point4"]}`}
            >
              <div className={`${styles["text-box"]} ${styles["right-side"]}`}>
                <h2>Freelance Full-stack Engineer</h2>
                <h4>Self-employed</h4>
                <small>Nov 2023 - Present</small>
                <p>
                  {" "}
                  Started taking clients for a multitude of software and web
                  development tasks. The work has mainly been centered around
                  full-stack web development but at times software development
                  was required also.
                </p>
              </div>
              <div
                className={`${styles["roadmap-point"]} ${styles["right"]}`}
              ></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
