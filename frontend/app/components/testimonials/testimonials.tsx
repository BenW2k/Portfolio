import {testimonials} from "./data";
import styles from "../../styles/components/testimonials/testimonials.module.css";
import Card from "./card";

export default function Testimonials() {
  return (
    <main className={styles.main}>
      {testimonials.map((testimonial, index) => {
        return <Card key={index} {...testimonial} />;
      })}
    </main>
  );
}
