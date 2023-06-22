import { useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div className={styles.footer}>
      <div className={`${styles.footer_content} second-container`}>
        <p> Copyright © {currentYear}. All rights are reserved.</p>
        <div>
          <a
            href="https://www.linkedin.com/in/the-mustafa-khaled/"
            target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/mustafa-khaled" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
