import styles from "../../styles/components/projects/projects.module.css";
import Project from "./project";
import Modal from "./modal";
import fr from "../../../public/FR_1.png";
import client from "../../../public/connor_1.png";
import syn from "../../assets/media/syn_test.svg";
import sent from "../../../public/BI_1.png";
import {useState} from "react";

export default function Projects() {
  const projects = [
    {
      title: "Synergy",

      src: syn,

      color: "#000000",

      type: "Fullstack Development",

      href: "/work/synergy",
    },

    {
      title: "Client Portfolio",

      src: client,

      color: "#8C8C8C",

      type: "Frontend Development",

      href: "/work/resume",
    },

    {
      title: "Facial Recognition App",

      src: fr,

      color: "#EFE8D3",

      type: "Machine Learning",

      href: "/work/facial-recognition",
    },

    {
      title: "Sentiment Analysis",

      src: sent,

      color: "#706D63",
      type: "Machine Learning",

      href: "/work/sentiment",
    },
  ];

  const [modal, setModal] = useState({active: false, index: 0});

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
              type={project.type}
              href={project.href}
            />
          );
        })}
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  );
}
