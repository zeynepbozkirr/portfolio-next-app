import React, { useEffect } from "react";
import styles from "./fadetitle.module.css";
import Fade from "react-reveal/Fade";
import { Col, Row, Typography } from "antd";
import { backIn } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const FadeTitle = ({ title, description, dataAousTitle, dataAousDesc }) => {
  const { Text } = Typography;
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Row>
      <Col data-aos={dataAousTitle} data-aos-anchor-placement="bottom-bottom">
        <h5 className={styles.header}>
          {title}
          <div className={styles.point} />
        </h5>
        <Text data-aos={dataAousDesc} className={styles.desc}>
          {description}
        </Text>
      </Col>
    </Row>
  );
};

export default FadeTitle;
