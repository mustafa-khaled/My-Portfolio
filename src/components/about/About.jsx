import styles from "./about.module.css";

const About = () => {
  return (
    <div className={`${styles.about} second-container`} id="about">
      <div
        className={`${styles.image_holder} ${styles.box}`}
        data-aos="zoom-in-right"></div>
      <div className={styles.text} data-aos="zoom-in-left">
        <h3>About Me</h3>
        <h2>Front End Developer</h2>
        <p>
          "I am a dynamic and results-driven Front-End Developer with a genuine
          passion for crafting user-centric web experiences. My mission is to
          combine creativity with technical expertise to transform client
          visions into compelling and functional websites. Proficient in a range
          of front-end technologies, I have a track record of delivering
          high-quality projects that captivate users and enhance their digital
          journeys. My dedication, problem-solving skills, and commitment to
          staying current with industry trends position me to make a substantial
          impact on projects and drive business success".
        </p>
      </div>
    </div>
  );
};

export default About;
