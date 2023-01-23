import React, { useEffect, useState } from "react";
import { Animate } from "react-move";
import { easeExpOut, easeBackOut } from "d3-ease";
import { Button, Col, Row, Typography } from "antd";
import styles from "./blogpost.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const BlogPost = ({ item, direction }) => {
  const { Text, Title } = Typography;
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <Col
      data-aos={direction % 2 ? "fade-left" : "fade-right"}
      data-aos-anchor-placement="bottom-bottom"
    >
      <Text className={styles.date}>
        {item.date} - {item.topic}
      </Text>
      <Title className={styles.title}> {item.title}</Title>

      <Text className={styles.desc}>{item.description}</Text>
    </Col>
  );
};

export default BlogPost;
