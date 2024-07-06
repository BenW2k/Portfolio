import {useRef} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";

const scaleAnimation = {
  initial: {scale: 0, x: "-50%", y: "-50%"},
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]},
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]},
  },
};

interface props {
  modal: any;
  projects: any;
}

export default function Modal({modal, projects}: props) {
  const {active, index} = modal;

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
          {projects.map((project: any, index: number) => {
            const {src, color} = project;
            return (
              <div
                className={styles.modal}
                style={{backgroundColor: color}}
                key={`modal_${index}`}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
