import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={`${styles.contact} second-container`} id="contact">
      <div className={styles.text}>
        <h3>Contact Me</h3>
        <h2> Don't be shy! Hit me up! 👇</h2>
      </div>
      <div className={styles.second}>
        <div className={styles.one}>
          <i className="fa-solid fa-envelope-open-text"></i>
          <div>
            <h4>Email</h4>
            <a href="mailto:mustafakhaledinfo@gmail.com">
              mustafakhaledinfo@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.one}>
          <i className="fa-brands fa-linkedin"></i>
          <div>
            <h4>Linkedin</h4>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank"
              rel="noreferrer">
              Mustafa Khaled
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
