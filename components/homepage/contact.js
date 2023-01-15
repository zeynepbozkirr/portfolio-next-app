import React, { useState } from "react";
import styles from "./home.module.css";
import Github from "../../public/github.svg";
import Linkedin from "../../public/linkedin.svg";
import Medium from "../../public/medium.svg";
import Stackoverflow from "../../public/stackoverflow.svg";
import Link from "next/link";
import { Typography } from "antd";

const Contact = () => {
  const [github, setGithub] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [stackoverflow, setStackoverflow] = useState(false);
  const [linked, setLinked] = useState(false);
  const [medium, setMedium] = useState(false);

  const { Paragraph, Text } = Typography;

  return (
    <div className={styles.contactIcon}>
      <Link
        className={styles.Link}
        onMouseEnter={() => setGithub(!github)}
        onMouseLeave={() => setGithub(!github)}
        href="https://github.com/bekirytm"
      >
        <div className={styles.div}>
          <Github className={styles.icon} />
        </div>
        <div className={styles.div}>
          <Text className={styles.text}>GITHUB</Text>
        </div>
      </Link>
      <Link
        className={styles.Link}
        onMouseEnter={() => setLinkedin(!linkedin)}
        onMouseLeave={() => setLinkedin(!linkedin)}
        href="https://www.linkedin.com/in/bekir-yetim-7b00b3181/"
      >
        <Linkedin className={styles.icon} />
        <Text className={styles.text}>LINKEDIN</Text>
      </Link>
      <Link
        className={styles.Link}
        onMouseEnter={() => setMedium(!medium)}
        onMouseLeave={() => setMedium(!medium)}
        href="https://medium.com/@bekir.ytm"
      >
        <Medium className={styles.icon} />
        <Text className={styles.text}>MEDIUM</Text>
      </Link>
      <Link
        className={styles.Link}
        onMouseEnter={() => setStackoverflow(!stackoverflow)}
        onMouseLeave={() => setStackoverflow(!stackoverflow)}
        href="https://stackoverflow.com/users/12003912/bekirytm"
      >
        <Stackoverflow className={styles.icon} />
        <Text className={styles.text}>STACKOVERFLOW</Text>
      </Link>
    </div>
  );
};

export default Contact;
