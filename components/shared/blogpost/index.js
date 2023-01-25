import React, { useEffect, useState } from "react";
import { Animate } from "react-move";
import { easeExpOut, easeBackOut } from "d3-ease";
import { Button, Col, Row, Typography } from "antd";
import styles from "./blogpost.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import NeumorphismButton from "../buttonNeumorphism";

const BlogPost = ({ item, direction }) => {
  const { Text, Title } = Typography;
  const [direct, setDirect] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <Row
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className={styles.container}
    >
      <Col xs={24} sm={24} md={20} lg={20} classNmae={styles.colDate}>
        <Col style={{ width: "100%" }}>
          <Text className={styles.date}>
            {item.date} - {item.topic}
          </Text>
          <h5 className={styles.title}> {item.title}</h5>
          <Col className={styles.descCol}>
            <Text className={styles.desc}>{item.description}</Text>
          </Col>
        </Col>
      </Col>

      <Col xs={24} sm={24} md={4} lg={4} className={styles.moreButtonCol}>
        <Button className={styles.moreButton}>MORE</Button>
      </Col>
    </Row>
  );
};

export default BlogPost;
