import React, { forwardRef, useEffect } from "react";
import styles from "./technologies.module.css";
import FadeTitle from "../shared/fadetitle";
import { motion, useAnimation } from "framer-motion";
import {
  JavascriptSvgrepoCom,
  ReactSvgrepoCom,
  Css3SvgrepoCom,
  GitSvgrepoCom,
  NodeJsSvgrepoCom,
} from "../icons";

const TechnologiesComp = forwardRef((props, ref) => {
  const icons = [
    JavascriptSvgrepoCom,
    ReactSvgrepoCom,
    Css3SvgrepoCom,
    GitSvgrepoCom,
    NodeJsSvgrepoCom,
  ];

  const animation = useAnimation();

  useEffect(() => {
    if (props.inView) {
      animation.start({
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
    }
  }, [props.inView]);

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
    <div ref={ref} id="technologies" className={styles.tech}>
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
        {icons.map((itemx, index) => (
          <motion.li
            key={index}
            className={styles.item}
            variants={item}
            // animate={animation}
          >
            {itemx()}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
});

export default TechnologiesComp;
