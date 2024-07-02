import dynamic from "next/dynamic";
import styles from "../../styles/components/contact.module.css";
import {useState, useRef} from "react";
import emailjs from "@emailjs/browser";
import {formKey} from "./keys";

const Scene = dynamic(() => import("@/app/components/contact/Scene"), {
  ssr: false,
});

export default function Contact() {
  return (
    <main className="relative h-screen">
      <Scene />

      <div className={styles.contactForm}>
        <div className={styles.formContainer}>
          <h2 className={styles.contactTitle}>
            Let's discuss how I can be of assistance
          </h2>
          <form className={styles.form}>
            {/* <label>
              {" "}
              "My Name" <p>*</p>
            </label> */}
            <input
              type="text"
              className={styles.field}
              placeholder="Your Name"
            />
            <input
              type="text"
              className={styles.field}
              placeholder="example@gmail.com"
            />
            <input
              type="text"
              className={`${styles.field} ${styles.message}`}
              placeholder="Example Text"
            />
          </form>
        </div>
      </div>
    </main>
  );
}
