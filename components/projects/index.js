import React from "react";
import MotionTitle from "../shared/motiontitle";
import FadeTitle from "../shared/fadetitle";
import styles from "./projects.module.css";
import { Card, Col, Row } from "antd";
import HoverVideoPlay from "../shared/videoplayer/videoplayer";
import ProjectCard from "../shared/videoplayer";

const ProjectComp = () => {
  const { Meta } = Card;

  return (
    <Row span={24} id="projects" className={styles.project}>
      <Col span={24} className={styles.fadleTitle}>
        <FadeTitle
          title={"MY PROJECTS"}
          description={
            "You can review the projects and applications I have developed.\n" +
            "\n"
          }
          dataAousTitle={"zoom-in-up"}
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} className={styles.projectCard}>
        <ProjectCard title={"MFET"} description={"MFET"} />
      </Col>

      <Col xs={24} sm={24} md={24} lg={12} className={styles.projectCard}>
        <ProjectCard title={"MFET"} description={"MFET"} />
      </Col>
    </Row>
  );
};

export default ProjectComp;
