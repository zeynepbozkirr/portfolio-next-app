import React from "react";
import { Card, Col, Row, Typography } from "antd";
import HoverVideoPlay from "./videoplayer";
import styles from "./vieoplayer.module.css";

const { Meta } = Card;

const ProjectCard = ({ title, description, link, video }) => {
  const { Text, Title } = Typography;
  return (
    <Row className={styles.projectCard}>
      <HoverVideoPlay link={link} video={video} />
      <Text style={{ width: "35%" }}>
        <h3>{title}</h3>
        {description}
      </Text>
    </Row>
  );
};

export default ProjectCard;
