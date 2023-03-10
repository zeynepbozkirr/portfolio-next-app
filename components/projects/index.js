import React from "react";
import FadeTitle from "../shared/fadetitle";
import styles from "./projects.module.css";
import { Card, Col, Row } from "antd";
import ProjectCard from "../shared/videoplayer";
import SvgAppstoreSvgrepoCom from "../icons/AppstoreSvgrepoCom";
import PlaystoreSvgrepo from "../icons/PlaystoreSvgrepoCom";

const projectData = [
  {
    title: "MFET",
    linkPlay:
      "https://play.google.com/store/apps/details?id=earth.mfet.app.android&hl=en_US&gl=US",
    linkApp: 'https://apps.apple.com/tr/app/mfet/id1645084642?l=tr"',
    description: "Mobile Application",
    photo: "mfet.jpeg",
  },
  {
    title: "Chary On Top",
    linkPlay:
      "https://play.google.com/store/apps/details?id=com.smartpotato.charyontop&hl=en_US&gl=US",
    linkApp: "https://apps.apple.com/tr/app/chary-on-top/id1620327753?l=tr",
    description: "Mobile Application",
    photo: "charyontop.jpeg",
  },
  {
    title: "FIG",
    linkPlay:
      "https://play.google.com/store/apps/details?id=online.figcoin.figvault&hl=en&gl=US",
    linkApp:
      "https://play.google.com/store/apps/details?id=online.figcoin.figvault&hl=en&gl=US",
    description: "Mobile Application",
    photo: "fig.jpeg",
  },
];

const ProjectComp = () => {
  const { Meta } = Card;

  return (
    <Row span={24} id="projects" className={styles.project}>
      <Col span={24} className={styles.fadleTitle}>
        <FadeTitle
          title={"MY PROJECTS"}
          description={"You can review applications I have developed.\n" + "\n"}
          dataAousTitle={"zoom-in-up"}
        />
      </Col>
      {projectData.map((item, index) => {
        return (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={8}
            className={styles.projectCard}
          >
            <ProjectCard
              linkPlay={item.linkPlay}
              linkApp={item.linkApp}
              title={item.title}
              description={item.description}
              photo={item.photo}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProjectComp;
