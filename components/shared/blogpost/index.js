import React, { useEffect, useState } from "react";
import { Animate } from "react-move";
import { easeExpOut, easeBackOut } from "d3-ease";
import { Button, Col, Row, Typography } from "antd";
import styles from "./blogpost.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const BlogPost = ({ inView, item, direction }) => {
  const { Text, Title } = Typography;

  return (
    <div data-aos="fade-right" data-aos-anchor-placement="top-center">
      <Row>
        <Text className={styles.date}>
          {item.date} - {item.topic}
        </Text>
        <Title className={styles.title}> {item.title}</Title>
        <Text className={styles.desc}>{item.description}</Text>
      </Row>
      <hr />
    </div>
  );
};

export default BlogPost;
