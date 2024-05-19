import Image from "next/image";
import styles from "./styles/pages/home.module.css";
import {motion, useAnimate} from "framer-motion";

export default function Home() {
  const [scope, animate] = useAnimate();

  return (
    <motion.div ref={scope} className={styles["hero-section"]}>
      <h1 className={styles["hero-title"]}>Hello</h1>
      <p className={styles["hero-paragraph"]}>
        I'm Ben Workman, a Full-stack Software Engineer with sub-specialties in
        Web Development, Data Science, Machine Learning and Finance.
      </p>
    </motion.div>
  );
}
