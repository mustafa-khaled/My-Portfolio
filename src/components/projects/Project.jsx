import styles from "./projects.module.css";
import { data } from "../../projectsData";

const Project = () => {
  return (
    <>
      {data.map((ele) => {
        return (
          <div key={ele.id} className={styles["project-holder"]}>
            <div>
              <img
                src={ele.image}
                alt="ProjectImage"
                className={styles.project_image}
              />
            </div>
            <div>
              <h4>{ele.title}</h4>
              <p>{ele.description}</p>

              {ele.live && (
                <a
                  href={ele.live}
                  target="_blank"
                  className={styles.link_one}
                  rel="noreferrer">
                  Live Server
                </a>
              )}

              <a
                href={ele.repo}
                target="_blank"
                className={styles.link_two}
                rel="noreferrer">
                Repository Link
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Project;
