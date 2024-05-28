import styles from "../styles/components/timeline.module.css";
import Image from "next/image";
import placeholder from "../assets/media/placeholder-image.svg";

export default function Timeline() {
  return (
    <div className={styles["timeline"]}>
      <div className={styles["container"]}>
        <div className={styles["text-box"]}>
          <h2>BSc Business Management</h2>
          <h4>Swansea University</h4>
          <small>Oct 2018 - July 2021</small>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatibus commodi quae, maiores similique dolore culpa recusandae
            itaque, quos cupiditate corrupti repellendus, vel tempore expedita
            reprehenderit! Omnis nobis dolore vero!
          </p>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["text-box"]}>
          <h2>MSc Financial Technology</h2>
          <h4>Swansea University</h4>
          <small>Sept 2023 - Nov 2023</small>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatibus commodi quae, maiores similique dolore culpa recusandae
            itaque, quos cupiditate corrupti repellendus, vel tempore expedita
            reprehenderit! Omnis nobis dolore vero!
          </p>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["text-box"]}>
          <h2>Placeholder Name</h2>
          <h4>Synergy Construction Ltd.</h4>
          <small>Sept 2023 - Nov 2023</small>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatibus commodi quae, maiores similique dolore culpa recusandae
            itaque, quos cupiditate corrupti repellendus, vel tempore expedita
            reprehenderit! Omnis nobis dolore vero!
          </p>
        </div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["text-box"]}>
          <h2>Freelance Full-stack Engineer</h2>
          <small>Nov 2023 - Present</small>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            voluptatibus commodi quae, maiores similique dolore culpa recusandae
            itaque, quos cupiditate corrupti repellendus, vel tempore expedita
            reprehenderit! Omnis nobis dolore vero!
          </p>
          <Image
            src={placeholder}
            className={styles["roadmap-image left-side"]}
            alt="linkedin"
          />
        </div>
      </div>
    </div>
  );
}
