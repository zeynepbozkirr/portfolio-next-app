import React, { forwardRef } from "react";
import styles from "./home.module.css";
import { Button, Col, Row, Typography } from "antd";
import Contact from "./contact";
import NeumorphismButton from "../shared/buttonNeumorphism";

// eslint-disable-next-line react/display-name
const HomeComp = forwardRef((props, ref) => {
  const { Paragraph, Text } = Typography;

  return (
    <>
      <Row ref={ref} className={styles.home}>
        <Col className={styles.homeAbout} offset={1} span={16}>
          <Text className={styles.name}>Bekir Yetim</Text>
          <Text className={styles.job}> FRONTEND DEVELOPER</Text>
          <Text className={styles.explan}>
            Hello, I am Bekir. I find the process of designing and coding an
            idea into reality quite enjoyable. You can have a closer look at my
            portfolio to see my projects.
          </Text>
          <div>
            <NeumorphismButton buttonTitle={"My Project"} />
          </div>
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
    </>
  );
});

export default HomeComp;
