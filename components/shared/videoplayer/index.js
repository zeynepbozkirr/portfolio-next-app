import React from "react";
import { Card } from "antd";
import HoverVideoPlay from "./videoplayer";
const { Meta } = Card;

const ProjectCard = () => {
  return (
    <Card
      hoverable
      style={{
        width: 400,
      }}
      cover={<HoverVideoPlay />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default ProjectCard;
