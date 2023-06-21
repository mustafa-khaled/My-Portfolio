import styles from "./about.module.css";

const About = () => {
  return (
    <div className={`${styles.about} second-container`} id="about">
      <div className={`${styles.image_holder} ${styles.box}`}></div>
      <div className={styles.text}>
        <h3>About Me</h3>
        <h2>Front End Developer</h2>
        <p>
          "I am a front-end developer with a year of experience in web
          development. I specialize in HTML, CSS, and JavaScript and enjoy
          learning new technologies to enhance my skills. My passion for
          programming and e-commerce has led me to develop a deep understanding
          of user behavior and user experience. I am committed to delivering
          creative and high-quality solutions that meet clients' needs and
          exceed their expectations. Let's connect and discuss how I can help
          bring your digital vision to life".
        </p>
      </div>
    </div>
  );
};

export default About;
