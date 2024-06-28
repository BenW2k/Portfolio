import styles from "../styles/components/projects.module.css";
import Image from "next/image";
import img1 from "../assets/media/connor_1.png";
import img2 from "../assets/media/connor_2.png";
import img3 from "../assets/media/port_1.png";
import img4 from "../assets/media/port_2.png";
import img5 from "../assets/media/placeholder-image.svg";
import img6 from "../assets/media/placeholder-image.svg";
import img7 from "../assets/media/connor_2.png";

const images: object = [
  "../../assets/media/connor_1.png",
  "../../assets/media/connor_2.png",
  "../../assets/media/port_1.png",
  "../../assets/media/port_2.png",
  "../../assets/media/placeholder-image.svg",
  "../../assets/media/placeholder-image.svg",
  "../../assets/media/placeholder-image.svg",
];

const Column = ({images}: {images: any[]}) => {
  return (
    <div className={styles.column}>
      {images.map((src: string, index: number) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={src} fill alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default function Projects() {
  return <p>hello world</p>;
}
