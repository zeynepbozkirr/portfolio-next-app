import React from "react";
import styles from "./footer.module.css";
import { Typography } from "antd";
import { Github, Linkedin, Medium, Stackoverflow } from "../../icons";

const FooterComp = () => {
  const { Text } = Typography;
  return (
    <div className={styles.footer}>
      <div className={styles.item}>
        <div className={styles.titleItem}>
          <Text className={styles.title}>Let work together!</Text>
          <Text className={styles.point} />
        </div>

        <Text className={styles.description}>
          We can collaborate or you can reach out to me for Freelance job
          offers.
        </Text>
        <a href="#">bekiryetim@gmail.com</a>

        <div className={styles.icon}>
          <Github />
          <Linkedin />
          <Medium />
          <Stackoverflow />
        </div>
      </div>
      <div className={styles.end}>
        <div className={styles.line}></div>
        <Text className={styles.built}>Built With 💙 Zeynep Bozkır</Text>
        <Text className={styles.built}>
          You can access the source codes of this website on Github.
        </Text>
      </div>
    </div>
  );
};

export default FooterComp;
