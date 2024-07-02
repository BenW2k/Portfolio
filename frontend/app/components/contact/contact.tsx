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
        <h2 className={styles.contactTitle}>Contact Me</h2>
        <form className={styles.form}>
          <div>
            {/* <label>
              {" "}
              "My Name" <p>*</p>
            </label> */}
            <input
              type="text"
              className={styles.field}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label></label>
            <input
              type="text"
              className={styles.field}
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <input
              type="text"
              className={`${styles.field} ${styles.message}`}
              placeholder="..."
            />
          </div>
        </form>
      </div>
    </main>
  );
}
