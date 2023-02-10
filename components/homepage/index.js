import React, { forwardRef } from "react";
import styles from "./home.module.css";
import { Button, Col, Row, Typography } from "antd";
import Contact from "./contact";
import NeumorphismButton from "../shared/buttonNeumorphism";
import Link from "next/link";

// eslint-disable-next-line react/display-name
const HomeComp = forwardRef((props, ref) => {
  const { Paragraph, Text } = Typography;

  return (
    <Row ref={ref} className={styles.home}>
      <Col className={styles.homeAbout} offset={1} span={16}>
        <Text className={styles.name}>Bekir Yetim</Text>
        <Text className={styles.job}> FRONTEND DEVELOPER</Text>
        <Text className={styles.explan}>
          Hello, I started my software adventure with the department I studied
          at 9 Eylül University. I am currently 24 years old and have 3 years of
          working experience. I want to continue as a full stack developer in
          the next period of my career.
        </Text>

        <Link href="/#projects">
          <NeumorphismButton buttonTitle={"My Project"} />
        </Link>
      </Col>
      <div
        style={{
          height: "520px",
          right: 0,
          position: "absolute",
        }}
      >
        <Contact />
      </div>
    </Row>
  );
});

export default HomeComp;
