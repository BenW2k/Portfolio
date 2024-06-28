import {useScroll, useTransform} from "framer-motion";
import styles from "../../styles/components/projects.module.css";
import Image from "next/image";

const images: Array<string> = [
  "connor_1.png",
  "connor_2.png",
  "port_1.png",
  "port_2.png",
  "port_1.png",
  "port_2.png",
  "port_1.png",
];

interface ColumnProps {
  images: any;
}

const Column = ({images}: ColumnProps) => {
  return (
    <div className={styles.column}>
      {images.map((src: string, index: number) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/${src}`} fill alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[0], images[1], images[2]]} />
      </div>
    </main>
  );
}
