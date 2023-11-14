import styles from "./home.module.css";
import userPhoto from "../../assets/myPhoto.jpg";
import html from "../../assets/html5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/Unofficial_JavaScript_logo_2.svg.png";
import rea from "../../assets/react.png";
import bootstrap from "../../assets/bootstrap-social-logo.png";
import fire from "../../assets/logo_firebase_1920px_clr.png";
import nextJs from "../../assets/nextjs-icon-dark-background.png";
import tailwind from "../../assets/a_op8KnL_400x400.jpg";

const images = [
  {
    id: 1,
    img: html,
  },

  {
    id: 2,
    img: css,
  },

  {
    id: 3,
    img: js,
  },

  {
    id: 4,
    img: rea,
  },

  {
    id: 5,
    img: nextJs,
  },

  {
    id: 6,
    img: bootstrap,
  },

  {
    id: 7,
    img: tailwind,
  },

  {
    id: 8,
    img: fire,
  },
];

const Home = () => {
  return (
    <div className={styles.home_content} id="home">
      <div className={`${styles.home} second-container`}>
        <div className={styles["hero-section"]}>
          <div className={styles.text} data-aos="fade-right">
            <h1>Front-End Developer</h1>
            <p>
              Hi, I'm Mustafa Khaled. A passionate Front-end React Developer
              based in Cairo, Egypt.
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/the-mustafa-khaled/"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/mustafa-khaled"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </p>
          </div>
          <div className={styles.image_holder} data-aos="fade-left">
            <img src={userPhoto} alt="PersonalPhoto" />
          </div>
        </div>
        <div
          className={styles["tech-stack"]}
          data-aos="fade-up"
          data-aos-duration="2000">
          <p>Tech Stack</p>
          <div>
            {images?.map((i) => {
              return <img key={i.id} src={i.img} alt="html" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
