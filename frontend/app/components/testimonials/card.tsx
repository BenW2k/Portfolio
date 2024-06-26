import React from "react";
import styles from "../../styles/components/testimonials/card.module.css";

interface Card {
  quote: string;
  img: any;
  color: string;
  person: string;
  company: string;
  i: number;
  range?: [number, number];
  targetScale?: number;
  progress: any;
}

export default function Card(card: Card) {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{
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
      </div>
    </div>
  );
}
