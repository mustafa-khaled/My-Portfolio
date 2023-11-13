import { useState } from "react";
import ProjectList from "./ProjectList";
import styles from "./projects.module.css";

const filter = [
  { tag: "All", id: 1, category: "all" },
  { tag: "React", id: 2, category: "react" },
  { tag: "Html & Css & JS", id: 3, category: "native" },
];

const Projects = () => {
  const [activeTag, setActiveTag] = useState("all");

  return (
    <div className={styles.projects} id="projects">
      <h2 className={styles.head}>Projects</h2>

      <ul className={`${styles.filter} second-container`}>
        {filter.map((t) => {
          return (
            <li
              key={t.id}
              className={activeTag === t.category ? styles.active : ""}
              onClick={() => setActiveTag(t.category)}>
              {t.tag}
            </li>
          );
        })}
      </ul>

      <div className={`${styles.projects_content} second-container`}>
        <ProjectList activeTag={activeTag} />
      </div>
    </div>
  );
};

export default Projects;
