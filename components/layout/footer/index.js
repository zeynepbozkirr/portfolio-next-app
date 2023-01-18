import React from "react";
import styles from "./footer.module.css";
import { Col, Row, Typography } from "antd";
import { Github, Linkedin, Medium, Stackoverflow } from "../../icons";

const FooterComp = () => {
  const { Title, Text } = Typography;
  return (
    <div className={styles.footer}>
      <div className={styles.item}>
        <Text className={styles.title}> Let's work together! </Text>
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
    </div>
  );
};

export default FooterComp;
