import React from "react";
import { motion } from "framer-motion";
import styles from "./motiontitle.module.css";

const MotionTitle = () => {
  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ scale: 0 }}
        animate={{ rotate: 0.2, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      />
    </>
  );
};

export default MotionTitle;
