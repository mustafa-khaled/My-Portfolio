import styles from "./home.module.css";
import userPhoto from "../../assets/homeImage.png";
import html from "../../assets/html5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/Unofficial_JavaScript_logo_2.svg.png";
import rea from "../../assets/react.png";
import bootstrap from "../../assets/bootstrap-social-logo.png";
import fire from "../../assets/logo_firebase_1920px_clr.png";

const Home = () => {
  return (
    <div className={styles.home_content} id="home">
      <div className={`${styles.home} second-container`}>
        <div className={styles.first}>
          <div className={styles.text}>
            <h1>Front-End Developer</h1>
            <p>
              Hi, I'm Mustafa Khaled. A passionate Front-end React Developer
              based in Cairo, Egypt.
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/the-mustafa-khaled/"
                target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/mustafa-khaled" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </p>
          </div>
          <div className={styles.image_holder}>
            <img src={userPhoto} alt="Personal Photo" />
          </div>
        </div>
        <div className={styles.second}>
          <p>Tech Stack</p>
          <div>
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={rea} alt="eeact" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={fire} alt="firebase" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
