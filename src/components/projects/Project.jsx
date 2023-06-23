import styles from "./projects.module.css";
import { data } from "../../projectsData";

const Project = () => {
  return (
    <>
      {data.map((ele) => {
        return (
          <div key={ele.id}>
            <div>
              <img
                src={ele.image}
                alt="Project Image"
                className={styles.project_image}
              />
            </div>
            <div>
              <h4>{ele.title}</h4>
              <p>{ele.description}</p>

              <a href={ele.live} target="_blank" className={styles.link_one}>
                Live Server
              </a>

              <a href={ele.repo} target="_blank" className={styles.link_two}>
                Repository Link{" "}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Project;
