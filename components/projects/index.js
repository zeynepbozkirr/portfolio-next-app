import React from "react";
import MotionTitle from "../shared/motiontitle";
import FadeTitle from "../shared/fadetitle";
import styles from "./projects.module.css";
import { Col, Row } from "antd";

const ProjectComp = () => {
  return (
    <Row span={24} id="projects" className={styles.project}>
      <FadeTitle
        title={"MY PROJECTS"}
        description={
          "You can review the projects and applications I have developed.\n" +
          "\n"
        }
        dataAousTitle={"zoom-in-up"}
      />
    </Row>
  );
};

export default ProjectComp;
