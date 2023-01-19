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

const TechnologiesComp = forwardRef((props, ref) => {
  const mockData = [
    {
      title: "JS",
      icon: <JavascriptSvgrepoCom width={50} height={50} />,
    },
    {
      title: "React",
      icon: <ReactSvgrepoCom width={50} height={50} />,
    },
    {
      title: "Css",
      icon: <Css3SvgrepoCom width={50} height={50} />,
    },
    {
      title: "Git",
      icon: <GitSvgrepoCom width={50} height={50} />,
    },
    {
      title: "Node",
      icon: <NodeJsSvgrepoCom width={50} height={50} />,
    },
  ];

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

  const item = {
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
        type={"fade"}
        titleType={"left"}
      />
      <motion.ul
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {mockData.map((itemx, index) => (
          <motion.li key={index} className={styles.item} variants={item}>
            {itemx.icon}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
});

export default TechnologiesComp;
