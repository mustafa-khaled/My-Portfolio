import Project from "./Project";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <div className={`${styles.projects_content} second-container`}>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
