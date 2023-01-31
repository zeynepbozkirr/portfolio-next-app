import React, { useEffect, useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import styles from "./blogpost.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import parse from "html-react-parser";

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
      <Col xs={24} sm={24} md={20} lg={20} className={styles.colDate}>
        <Col style={{ width: "100%" }}>
          <Text className={styles.date}>{item.pubDate}</Text>
          <h5 className={styles.title}> {item.title}</h5>
          <Col
            key={item.link}
            className={styles.descCol}
            xs={24}
            sm={24}
            md={10}
            lg={10}
          >
            <Text className={styles.desc}>{item.categories[0]},</Text>
            <Text className={styles.desc}>{item.categories[1]},</Text>
            <Text className={styles.desc}>{item.categories[2]}</Text>
          </Col>
        </Col>
      </Col>

      <Col xs={24} sm={24} md={4} lg={4} className={styles.moreButtonCol}>
        <Link href={item.link}>
          <Button className={styles.moreButton}>MORE</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BlogPost;
