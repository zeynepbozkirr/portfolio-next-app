import React, { useState } from "react";
import styles from "./home.module.css";
import Github from "../../public/github.svg";
import Linkedin from "../../public/linkedin.svg";
import Medium from "../../public/medium.svg";
import Stackoverflow from "../../public/stackoverflow.svg";
import Link from "next/link";
import { Typography } from "antd";

const Contact = () => {
  const [hoverValue, setHoverValue] = useState({
    github: false,
    linkedin: false,
    medium: false,
  });

  const { Paragraph, Text } = Typography;

  const changeHover = (selected, value) => {
    if (selected === "github") {
      setHoverValue({ ...hoverValue, github: value });
    } else if (selected === "medium") {
      setHoverValue({ ...hoverValue, medium: value });
    } else {
      setHoverValue({ ...hoverValue, linkedin: value });
    }
  };

  return (
    <div className={styles.contactIcon}>
      <Link
        className={styles.Link}
        onMouseEnter={() => changeHover("github", true)}
        onMouseLeave={() => changeHover("github", false)}
        href="https://github.com/bekirytm"
      >
        {hoverValue.github ? (
          <div className={styles.iconArea}>
            <Github className={styles.icon} />
          </div>
        ) : (
          <div>
            <Text className={styles.text}>GITHUB</Text>
          </div>
        )}
      </Link>

      <Link
        className={styles.Link}
        onMouseEnter={() => changeHover("linkedin", true)}
        onMouseLeave={() => changeHover("linkedin", false)}
        href="https://github.com/bekirytm"
      >
        {hoverValue.linkedin ? (
          <div className={styles.iconArea}>
            <Linkedin className={styles.icon} />
          </div>
        ) : (
          <div>
            <Text className={styles.text}>LINKEDIN</Text>
          </div>
        )}
      </Link>

      <Link
        className={styles.Link}
        onMouseEnter={() => changeHover("medium", true)}
        onMouseLeave={() => changeHover("medium", false)}
        href="https://github.com/bekirytm"
      >
        {hoverValue.medium ? (
          <div className={styles.iconArea}>
            <Medium className={styles.icon} />
          </div>
        ) : (
          <div>
            <Text className={styles.text}>MEDIUM</Text>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Contact;
