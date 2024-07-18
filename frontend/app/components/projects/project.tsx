import styles from "../../styles/components/projects/project.module.css";

interface props {
  index: number;
  title: string;
  setModal: any;
  type: string;
  href: string;
}

export default function Project({index, title, setModal, type, href}: props) {
  return (
    <a
      onMouseEnter={() => {
        setModal({active: true, index});
      }}
      href={href}
      onMouseLeave={() => {
        setModal({active: false, index});
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <div>
        <p>{type}</p>
      </div>
    </a>
  );
}
