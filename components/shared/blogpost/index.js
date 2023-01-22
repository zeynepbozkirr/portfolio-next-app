import React, { useEffect, useState } from "react";
import { Animate } from "react-move";
import { easeExpOut, easeBackOut } from "d3-ease";
import { Button, Col, Row, Typography } from "antd";
import styles from "./blogpost.module.css";

const trackStyles = {
  borderRadius: 4,
  backgroundColor: "blue",
  color: "red",
  position: "relative",
  margin: "5px 3px 10px",
  width: "100%",
  height: "100%",
};

const BlogPost = ({ inView, item, direction }) => {
  const [state, setState] = useState(false);

  const { Text, Title } = Typography;

  const enter = () => ({
    opacity: [0, 5],
    x: [direction % 2 ? -400 : 400, direction % 2 ? 0 : 0],
    timing: { duration: 200 },
  });

  const update = () => ({
    opacity: [5],
    x: [direction % 2 ? -400 : 400, direction % 2 ? 0 : 0],
    timing: { duration: 1050, ease: easeExpOut },
  });

  useEffect(() => {
    enter();
  }, [inView]);

  return (
    <div>
      {inView ? (
        <Animate enter={enter} update={update}>
          {(state) => {
            const { x } = state;

            return (
              <Row>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    // height: "300/%",
                    borderRadius: 4,

                    // border: "solid 2px #10758c",
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`,
                  }}
                >
                  <Col>
                    <Text className={styles.date}>
                      {item.date} - {item.topic}
                    </Text>
                    <Title className={styles.title}> {item.title}</Title>
                    <Text className={styles.desc}>{item.description}</Text>
                  </Col>
                </div>
              </Row>
            );
          }}
        </Animate>
      ) : null}
    </div>
  );
};

export default BlogPost;
