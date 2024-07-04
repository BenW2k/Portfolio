import {useScroll, useTransform, motion} from "framer-motion";
import styles from "../../styles/components/projects.module.css";
import Image from "next/image";
import {useRef, useEffect} from "react";
import Lenis from "lenis";
import useDimension from "./useDimension";

const images: Array<string> = [
  "connor_1.png",
  "connor_2.png",
  "port_1.png",
  "port_2.png",
  "port_1.png",
  "port_2.png",
  "port_1.png",
];

export default function scrollProjects() {
  const container = useRef(null);
  const {height} = useDimension();
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  interface ColumnProps {
    images: any;
    y: any;
  }

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const Column = ({images, y}: ColumnProps) => {
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

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[0], images[1], images[2]]} y={y3} />
        <Column images={[images[3], images[4], images[5]]} y={y4} />
      </div>
    </main>
  );
}
