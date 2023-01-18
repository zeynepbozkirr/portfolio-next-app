import React from "react";
import MotionTitle from "../shared/motiontitle";
import FadeTitle from "../shared/fadetitle";
import styles from "./projects.module.css";

const ProjectComp = () => {
  return (
    <div id="projects" className={styles.project}>
      <FadeTitle
        titleType={"bottom"}
        title={"MY PROJECTS"}
        description={
          "You can review the projects and applications I have developed.\n" +
          "\n"
        }
      />
    </div>
  );
};

export default ProjectComp;
