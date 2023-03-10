import React, { forwardRef, useEffect } from "react";
import styles from "./technologies.module.css";
import FadeTitle from "../shared/fadetitle";
import {
  JavascriptSvgrepoCom,
  ReactSvgrepoCom,
  Css3SvgrepoCom,
  GitSvgrepoCom,
  NodeJsSvgrepoCom,
  Github,
  GitlabSvgrepoCom,
  TailwindSvgrepoCom,
  PythonSvgrepoCom,
  MongodbSvgrepoCom,
  FirebaseSvgrepoCom,
  SlackSvgrepoCom,
  Postman─░conSvgrepoCom,
  TypescriptOfficialSvgrepoCom,
  ExpoSvgrepoCom,
  ReduxSvgrepoCom,
  MobxSvgrepoCom,
  Html5SvgrepoCom,
} from "../icons";
import { Col, Row } from "antd";
import Aos from "aos";

const mockData = [
  {
    title: "TypeScript",
    icon: TypescriptOfficialSvgrepoCom,
  },
  {
    title: "JavaScript",
    icon: JavascriptSvgrepoCom,
  },
  {
    title: "React",
    icon: ReactSvgrepoCom,
  },
  {
    title: "React-Native",
    icon: ReactSvgrepoCom,
  },
  {
    title: "Expo",
    icon: ExpoSvgrepoCom,
  },
  {
    title: "Redux",
    icon: ReduxSvgrepoCom,
  },
  {
    title: "Mobx",
    icon: MobxSvgrepoCom,
  },
  {
    title: "Html5",
    icon: Html5SvgrepoCom,
  },
  {
    title: "Css3",
    icon: Css3SvgrepoCom,
  },

  {
    title: "NodeJS",
    icon: NodeJsSvgrepoCom,
  },

  {
    title: "Git",
    icon: GitSvgrepoCom,
  },
  {
    title: "GitHub",
    icon: Github,
  },
  {
    title: "GitLab",
    icon: GitlabSvgrepoCom,
  },
  {
    title: "Tailwind CSS",
    icon: TailwindSvgrepoCom,
  },
  {
    title: "Python",
    icon: PythonSvgrepoCom,
  },
  {
    title: "MongoDb",
    icon: MongodbSvgrepoCom,
  },
  {
    title: " Firebase",
    icon: FirebaseSvgrepoCom,
  },
  {
    title: "Slack",
    icon: SlackSvgrepoCom,
  },
  {
    title: "Postman",
    icon: Postman─░conSvgrepoCom,
  },
];

// eslint-disable-next-line react/display-name
const TechnologiesComp = forwardRef((props, ref) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Row {...props} ref={ref} id="technologies" className={styles.tech}>
      <FadeTitle
        title={"TECHNOLOGIES"}
        description={"Programming languages and tools I use"}
        dataAousTitle={"fade-right"}
        dataAousDesc={"fade-up-right"}
      />

      <Row className={styles.container}>
        {mockData.map((item, index) => (
          <Col
            className={styles.item}
            xs={8}
            sm={6}
            md={6}
            lg={4}
            key={index}
            data-aos="fade-zoom-in"
            data-aos-delay={index + "00"}
            data-aos-duration="100"
            data-aos-anchor-placement="bottom-bottom"
          >
            <item.icon className={styles.itemIcon} />
            <div className={styles.itemTitle}> {item.title}</div>
          </Col>
        ))}
      </Row>
    </Row>
  );
});

export default TechnologiesComp;
