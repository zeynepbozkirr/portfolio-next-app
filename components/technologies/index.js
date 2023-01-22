import React, { forwardRef } from "react";
import styles from "./technologies.module.css";
import FadeTitle from "../shared/fadetitle";
import { motion } from "framer-motion";
import {
  JavascriptSvgrepoCom,
  ReactSvgrepoCom,
  Css3SvgrepoCom,
  GitSvgrepoCom,
  NodeJsSvgrepoCom,
} from "../icons";

// eslint-disable-next-line react/display-name
const TechnologiesComp = forwardRef((props, ref) => {
  const mockData = [
    {
      title: "JS",
      icon: JavascriptSvgrepoCom,
    },
    {
      title: "React",
      icon: ReactSvgrepoCom,
    },
    {
      title: "Css",
      icon: Css3SvgrepoCom,
    },
    {
      title: "Git",
      icon: GitSvgrepoCom,
    },
    {
      title: "Node",
      icon: NodeJsSvgrepoCom,
    },
  ];
  console.log(mockData, "iiii");

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemLi = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div {...props} ref={ref} id="technologies" className={styles.tech}>
      <FadeTitle
        title={"TECHNOLOGIES"}
        description={"Programming languages and tools I use"}
        dataAousTitle={"fade-right"}
        dataAousDesc={"fade-up-right"}
      />
      <motion.ul
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {mockData.map((item, index) => (
          <motion.li key={index} variants={itemLi} className={styles.iconitem}>
            <item.icon className={styles.item} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
});

export default TechnologiesComp;
