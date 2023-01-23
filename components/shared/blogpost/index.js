import React, { useEffect, useState } from "react";
import { Animate } from "react-move";
import { easeExpOut, easeBackOut } from "d3-ease";
import { Button, Col, Row, Typography } from "antd";
import styles from "./blogpost.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const BlogPost = ({ item, direction }) => {
  const { Text, Title } = Typography;
  const [direct, setDirect] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <Col data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <Col>
        <Text className={styles.date}>
          {item.date} - {item.topic}
        </Text>
      </Col>
      <Col>
        <Title className={styles.title}> {item.title}</Title>
      </Col>

      <Col>
        <Text className={styles.desc}>{item.description}</Text>
      </Col>
    </Col>
  );
};

export default BlogPost;
