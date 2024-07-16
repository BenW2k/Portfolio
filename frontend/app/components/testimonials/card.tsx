import React, {useRef} from "react";
import quote from "../../assets/media/quotes.svg";
import Image from "next/image";
import styles from "../../styles/components/testimonials/card.module.css";
import {motion, useInView, useTransform} from "framer-motion";

interface Card {
  quote: string;
  img: any;
  color: string;
  person: string;
  company: string;
  i: number;
  range?: any;
  targetScale?: number;
  progress: any;
}

export default function Card(card: Card) {
  const scale = useTransform(card.progress, card.range, [1, card.targetScale]);

  return (
    <div className={styles.cardContainer}>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{amount: "all"}}
        className={styles.card}
      >
        <div className={styles["card-contents"]}>
          <Image src={quote} className={styles["quote-mark"]} alt="image" />
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{amount: "all"}}
            className={styles["card-text"]}
          >
            <p className={styles.quote}>"{card.quote}"</p>
            <div className={styles["card-bottom"]}>
              <div className={styles.from}>
                <p className={styles.person}>{card.person}</p>
                <p className={styles.company}>{card.company}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles["image-container"]}
            style={{
              scale,
              // backgroundColor: card.color,
              top: `calc(-10% + ${card.i * 25}px)`,
            }}
          >
            <Image src={card.img} alt="image" className={styles.image} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

{
  /* <motion.div
className={styles.card}
style={{
  scale,
  backgroundColor: card.color,
  top: `calc(-10% + ${card.i * 25}px)`,
}}
>
<div className={styles["card-contents"]}>
  <p className={styles.quote}>{card.quote}</p>
  <div className={styles["card-bottom"]}>
    <div className={styles.from}>
      <p className={styles.person}>{card.person}</p>
      <p className={styles.company}>{card.company}</p>
    </div>
  </div>
</div>
</motion.div> */
}
