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
          <h2 className={styles.contactTitle}>Drop Me A Message</h2>
          <form className={styles.form}>
            {/* <label>
              {" "}
              "My Name" <p>*</p>
            </label> */}

            <div className={styles.question}>
              <p>
                Name<span> *</span>
              </p>
              <input
                type="text"
                className={styles.field}
                placeholder="John Doe"
              />
            </div>
            <div className={styles.question}>
              <p>
                Email Address<span> *</span>
              </p>
              <input
                type="text"
                className={styles.field}
                placeholder="john@doe.com"
              />
            </div>
            <div className={styles.question}>
              <p>
                Message<span> *</span>
              </p>
              <input
                type="text"
                className={`${styles.field} ${styles.message}`}
                placeholder="Example Text"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
