import React from "react";
import styles from "../../styles/components/testimonials/card.module.css";
import Image from "next/image";

interface Card {
  quote: string;
  img: string;
  color: string;
  person: string;
}

export default function Card(card: Card) {
  return (
    <div className={styles.cardContainer}>
      <div style={{backgroundColor: card.color}}>
        <p>{card.quote}</p>
        <Image src={card.img} alt="card-img" />
      </div>
    </div>
  );
}
