import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import styles from "./vieoplayer.module.css";

const { Meta } = Card;

const ProjectCard = ({ title, description, linkPlay, linkApp, photo }) => {
  return (
    <Col>
      <Col className={styles.cardItem}>
        <img alt={title} src={photo} className={styles.image} />
        <Col className={styles.imagebutton}>
          <a href={linkApp} className={styles.store}>
            APP STORE
          </a>
          <a href={linkPlay} className={styles.store}>
            PLAY STORE
          </a>
        </Col>
      </Col>

      <Meta
        style={{ color: "#757677" }}
        title={title}
        description={description}
      />
    </Col>
  );
};

export default ProjectCard;
