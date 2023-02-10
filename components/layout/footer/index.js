import React from "react";
import styles from "./footer.module.css";
import { Typography } from "antd";
import {
  Github,
  Linkedin,
  MailFilledSvgrepoCom,
  Medium,
  Stackoverflow,
} from "../../icons";
import Link from "next/link";

const FooterComp = () => {
  const { Text } = Typography;
  return (
    <div className={styles.footer}>
      <div className={styles.item}>
        <div className={styles.titleItem}>
          <Text className={styles.title}>Let {`'`}s work together!</Text>
        </div>

        <Text className={styles.description}>
          We can collaborate or you can reach out to me for Freelance job
          offers.
        </Text>

        <a href={`mailto:bekiryetim@gmail.com`} className={styles.mail}>
          <MailFilledSvgrepoCom />
          <Text>bekir.yetim.06@gmail.com</Text>
        </a>

        <div className={styles.icon}>
          <Link href="https://github.com/bekirytm">
            <Github />
          </Link>

          <Link href="https://www.linkedin.com/in/bekir-yetim-7b00b3181/">
            <Linkedin />
          </Link>
          <Link href="https://medium.com/@bekir.ytm">
            <Medium />
          </Link>
          <Link href="https://stackoverflow.com/users/12003912/bekirytm">
            <Stackoverflow />
          </Link>
        </div>
      </div>
      <div className={styles.end}>
        <div className={styles.line}></div>
        <Text className={styles.built}>
          Built With 💙
          <a
            target="_blank"
            href="https://www.linkedin.com/in/zeynep-bozk%C4%B1r-379674194/"
            rel="noreferrer"
          >
            Zeynep Bozkır
          </a>
        </Text>
        <Text className={styles.built}>2023</Text>
      </div>
    </div>
  );
};

export default FooterComp;
