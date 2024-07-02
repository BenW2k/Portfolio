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
        <h2 className={styles.title}>Contact Me</h2>
        <form className={styles.form}>
          <input type="text" className={styles.field} placeholder="Your Name" />
          <input
            type="text"
            className={styles.field}
            placeholder="example@gmail.com"
          />
          <input type="text" className={styles.field} placeholder="..." />
        </form>
      </div>
    </main>
  );
}
