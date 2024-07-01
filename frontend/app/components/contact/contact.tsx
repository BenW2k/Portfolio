import dynamic from "next/dynamic";
import styles from "../../styles/components/contact.module.css";

const Scene = dynamic(() => import("@/app/components/contact/Scene"), {
  ssr: false,
});

export default function Contact() {
  return (
    <main className="relative h-screen">
      <Scene />
      <div className={styles.contactForm}>
        <h2 className={styles.title}>Contact Me</h2>
      </div>
    </main>
  );
}
