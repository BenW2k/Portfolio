import React from "react";
import styles from "../../styles/components/testimonials/card.module.css";
import {motion, useTransform} from "framer-motion";

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
      </motion.div>
    </div>
  );
}
