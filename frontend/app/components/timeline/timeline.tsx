import styles from "../../styles/components/timeline.module.css";
import {useEffect, useRef} from "react";
import Image from "next/image";
import placeholder from "../../assets/media/placeholder-image.svg";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Timeline() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scaleLine = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div>
      <div className={styles["timeline-container"]}>
        <div className={styles["timeline"]}>
          <motion.div
            viewport={{amount: "all"}}
            className={styles["timeline-header"]}
          >
            <h1>Heading</h1>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{amount: "all"}}
            className={`${styles["container"]} ${styles["point1"]}`}
          >
            <div className={styles["text-box"]}>
              <h2>BSc Business Management</h2>
              <h4>Swansea University</h4>
              <small>Oct 2018 - July 2021</small>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptatibus commodi quae, maiores similique dolore
                culpa recusandae itaque, quos cupiditate corrupti repellendus,
                vel tempore expedita reprehenderit! Omnis nobis dolore vero!
              </p>
            </div>

            {/* <div className={styles["roadmap-point"]}></div> */}
            <Image
              src={placeholder}
              className={styles["roadmap-image"]}
              alt="placeholder"
            />
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{amount: "all"}}
            className={`${styles["container"]} ${styles["point2"]}`}
          >
            <div className={styles["text-box"]}>
              <h2>MSc Financial Technology</h2>
              <h4>Swansea University</h4>
              <small>Sept 2023 - Nov 2023</small>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptatibus commodi quae, maiores similique dolore
                culpa recusandae itaque, quos cupiditate corrupti repellendus,
                vel tempore expedita reprehenderit! Omnis nobis dolore vero!
              </p>
            </div>
            {/* <div className={styles["roadmap-point"]}></div> */}
            <Image
              src={placeholder}
              className={`${styles["roadmap-image"]} ${styles["left-side"]}`}
              alt="placeholder"
            />
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{amount: "all"}}
            className={`${styles["container"]} ${styles["point-3"]}`}
          >
            <div className={styles["text-box"]}>
              <h2>Placeholder Name</h2>
              <h4>Synergy Construction Ltd.</h4>
              <small>Sept 2023 - Nov 2023</small>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptatibus commodi quae, maiores similique dolore
                culpa recusandae itaque, quos cupiditate corrupti repellendus,
                vel tempore expedita reprehenderit! Omnis nobis dolore vero!
              </p>
            </div>
            <Image
              src={placeholder}
              className={styles["roadmap-image"]}
              alt="placeholder"
            />
          </motion.div>
          <motion.div
            ref={container}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{amount: "all"}}
            className={`${styles["container"]} ${styles["point4"]}`}
          >
            <div className={styles["text-box"]}>
              <h2>Freelance Full-stack Engineer</h2>
              <h4>Self-employed</h4>
              <small>Nov 2023 - Present</small>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt voluptatibus commodi quae, maiores similique dolore
                culpa recusandae itaque, quos cupiditate corrupti repellendus,
                vel tempore expedita reprehenderit! Omnis nobis dolore vero!
              </p>
            </div>

            <div className={styles["roadmap-point"]}></div>
            <Image
              src={placeholder}
              className={styles["roadmap-image"]}
              alt="placeholder"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
