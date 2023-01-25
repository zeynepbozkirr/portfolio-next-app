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
      <div className={styles.fadleTitle}>
        <FadeTitle
          title={"MY PROJECTS"}
          description={
            "You can review the projects and applications I have developed.\n" +
            "\n"
          }
          dataAousTitle={"zoom-in-up"}
        />
      </div>
      <div className={styles.projectCard}>
        <ProjectCard />
        <ProjectCard />
      </div>
    </Row>
  );
};

export default ProjectComp;
