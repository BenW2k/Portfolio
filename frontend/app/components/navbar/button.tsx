import styles from "../../styles/components/navbar.module.css";
import {motion} from "framer-motion";

export default function Button({isActive, toggleMenu}: any) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{top: isActive ? "-100%" : "0%"}}
        transition={{duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
      >
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({label}: any) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
