import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import styles from "./vieoplayer.module.css";
import SvgAppstoreSvgrepoCom from "../../icons/AppstoreSvgrepoCom";
import PlaystoreSvgrepo from "../../icons/PlaystoreSvgrepoCom";

const { Meta } = Card;

const ProjectCard = ({ title, description, linkPlay, linkApp, photo }) => {
  return (
    <Col>
      <Col className={styles.cardItem}>
        <img alt={title} src={photo} className={styles.image} />
        <Col className={styles.imagebutton}>
          {linkPlay || linkApp ? (
            <>
              <a href={linkApp} className={styles.store}>
                <SvgAppstoreSvgrepoCom className={styles.icon} />
              </a>
              <a href={linkPlay} className={styles.store}>
                <PlaystoreSvgrepo className={styles.icon} />
              </a>
            </>
          ) : null}
        </Col>
      </Col>

      <Meta
        className={styles.description}
        title={title}
        description={description}
      />
    </Col>
  );
};

export default ProjectCard;
