import styles from "./projects.module.css";

function Project({ ele }) {
  return (
    <div className={styles["project-holder"]}>
      <div>
        <img
          src={ele.image}
          alt="ProjectImage"
          className={styles.project_image}
        />
      </div>
      <div>
        <h4>{ele.title}</h4>

        <div className={styles.actions}>
          {ele?.live && (
            <a href={ele.live} target="_blank" rel="noreferrer">
              <i className="fa-regular fa-eye"></i>
            </a>
          )}

          <a href={ele.repo} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-folder-open"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
