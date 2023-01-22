import React from "react";
import styles from "./fadetitle.module.css";
import Fade from "react-reveal/Fade";
import { Col, Row, Typography } from "antd";
import { backIn } from "framer-motion";

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
          <h5 className={styles.header}>
            {title}
            <div className={styles.point} />
          </h5>
        </Fade>
        <Fade bottom>
          <Text className={styles.desc}>{description}</Text>
        </Fade>
      </Col>
    </Row>
  );
};

export default FadeTitle;
