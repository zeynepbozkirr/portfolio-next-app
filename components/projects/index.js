import React from "react";
import FadeTitle from "../shared/fadetitle";
import styles from "./projects.module.css";
import { Card, Col, Row } from "antd";
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
        <ProjectCard
          linkPlay={""}
          linkApp={"https://apps.apple.com/tr/app/mfet/id1645084642"}
          title={"MFET"}
          description={"Mobile Application"}
          photo={"mfet.jpeg"}
        />
      </Col>

      <Col xs={24} sm={24} md={24} lg={12} className={styles.projectCard}>
        <ProjectCard
          linkPlay={""}
          linkApp={
            "https://apps.apple.com/tr/app/chary-on-top/id1620327753?l=tr"
          }
          title={"Chary On Top"}
          description={"Mobile Application"}
          photo={"charyontop.jpeg"}
        />
      </Col>
    </Row>
  );
};

export default ProjectComp;
