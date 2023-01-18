import React from "react";
import { Button, Col, Row, Typography } from "antd";
import styles from "./blogpost.module.css";

const BlogPost = ({ data }) => {
  console.log(data, "daa");

  const { Text } = Typography;

  return (
    <div className={styles.blogPost}>
      {data.map((item, index) => {
        return (
          <Row key={index} style={{ width: "100%" }}>
            <Col lg={14} md={14} xs={24} sm={24}>
              <Text className={styles.date}>
                {item.date} - {item.topic}
              </Text>
              <br />
              <Text className={styles.title}>{item.title}</Text>
              <br />
              <Text ellipsis={true} className={styles.desc}>
                {item.description}
              </Text>
            </Col>

            <Col
              xl={10}
              lg={10}
              md={10}
              xs={24}
              sm={24}
              className={styles.buttonCol}
            >
              <Button className={styles.button}>MORE</Button>
            </Col>

            <Col>
              <hr />
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default BlogPost;
