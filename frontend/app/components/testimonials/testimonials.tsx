import {testimonials} from "./data";
import styles from "../../styles/components/testimonials/testimonials.module.css";
import Card from "./card";
import {motion, useScroll} from "framer-motion";
import {useRef} from "react";

export default function Testimonials() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main ref={container} className={styles.main}>
      {testimonials.map((testimonial, index) => {
        const targetScale = 1 - (testimonials.length - index) * 0.05;
        return (
          <Card
            key={index}
            {...testimonial}
            range={[testimonial.i * 0.33, 1]}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
