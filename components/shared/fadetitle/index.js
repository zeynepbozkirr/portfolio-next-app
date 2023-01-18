import React from "react";
import styles from "./fadetitle.module.css";
import Fade from "react-reveal/Fade";
import { Col, Row, Typography } from "antd";

const FadeTitle = ({ title, description, type, titleType }) => {
  const { Text } = Typography;

  return (
    <Row>
      <Col>
        <Fade
          left={titleType === "left"}
          bottom={titleType === "bottom"}
          top={titleType === "top"}
          big
        >
          <h1 className={styles.header}>{title}</h1>
        </Fade>
        <Fade bottom>
          <Text className={styles.desc}>{description}</Text>
        </Fade>
      </Col>
    </Row>
  );
};

export default FadeTitle;
