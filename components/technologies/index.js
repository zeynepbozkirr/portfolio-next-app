import React from "react";
import styles from "./technologies.module.css";
import FadeTitle from "../shared/fadetitle";

const TechnologiesComp = () => {
  return (
    <div id="technologies" className={styles.tech}>
      <FadeTitle
        title={"TECHNOLOGIES"}
        description={"Programming languages and tools I use"}
        type={"fade"}
        titleType={"bottom"}
      />
    </div>
  );
};

export default TechnologiesComp;
