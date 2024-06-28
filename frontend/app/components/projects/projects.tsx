import {useScroll, useTransform, motion} from "framer-motion";
import styles from "../../styles/components/projects.module.css";
import Image from "next/image";
import {useRef} from "react";
import Lenis from "lenis";

const images: Array<string> = [
  "connor_1.png",
  "connor_2.png",
  "port_1.png",
  "port_2.png",
  "port_1.png",
  "port_2.png",
  "port_1.png",
];

export default function Projects() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  interface ColumnProps {
    images: any;
  }

  const Column = ({images}: ColumnProps) => {
    return (
      <motion.div style={{y}} className={styles.column}>
        {images.map((src: string, index: number) => {
          return (
            <div key={index} className={styles.imageContainer}>
              <Image src={`/${src}`} fill alt="image" />
            </div>
          );
        })}
      </motion.div>
    );
  };

  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  return (
    <main className={styles.main}>
      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[3], images[4], images[5]]} />
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[3], images[4], images[5]]} />
      </div>
    </main>
  );
}
