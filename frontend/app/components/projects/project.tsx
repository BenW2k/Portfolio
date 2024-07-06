import styles from "../../styles/components/projects/project.module.css";

interface props {
  index: number;
  title: string;
  setModal: any;
  type: string;
}

export default function Project({index, title, setModal, type}: props) {
  return (
    <div
      onMouseEnter={() => {
        setModal({active: true, index});
      }}
      onMouseLeave={() => {
        setModal({active: false, index});
      }}
      className={styles.project}
    >
      <h2>{title}</h2>

      <p>{type}</p>
    </div>
  );
}
