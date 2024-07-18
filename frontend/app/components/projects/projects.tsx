import styles from "../../styles/components/projects/projects.module.css";
import Image from "next/image";
import Project from "./project";
import Modal from "./modal";
import place from "../../assets/media/placeholder-image.svg";
import {useScroll, useTransform, motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";

export default function Projects() {
  const projects = [
    {
      title: "Synergy",

      src: place,

      color: "#000000",

      type: "Fullstack Development",

      href: "/work/synergy",
    },

    {
      title: "Client Portfolio",

      src: place,

      color: "#8C8C8C",

      type: "Frontend Development",

      href: "/work/resume",
    },

    {
      title: "Facial Recognition App",

      src: place,

      color: "#EFE8D3",

      type: "Machine Learning",

      href: "/work/facial-recognition",
    },

    {
      title: "Unsure",

      src: place,

      color: "#706D63",
      type: "Machine Learning",

      href: "/work/facial-recognition",
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
