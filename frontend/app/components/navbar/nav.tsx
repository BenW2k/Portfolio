import styles from "../../styles/components/navbar.module.css";
import {motion} from "framer-motion";
import {links, footerLinks} from "./nav-links";
import {perspective, slideIn} from "./animation";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const {title, href} = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href}>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link: any, i: number) => {
          const {title, href} = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              href={href}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
