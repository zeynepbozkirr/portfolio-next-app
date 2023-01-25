import React from "react";
import { Card } from "antd";
import HoverVideoPlay from "./videoplayer";
import styles from "./vieoplayer.module.css";

const { Meta } = Card;

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <Card
        hoverable
        style={{
          width: 400,
        }}
        cover={<HoverVideoPlay />}
      >
        <Meta title="MOBILE APPLICATION" description="MFET " />
      </Card>
    </div>
  );
};

export default ProjectCard;
