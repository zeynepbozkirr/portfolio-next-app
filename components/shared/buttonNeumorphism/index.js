import React from "react";
import styles from "./index.module.css";

const NeumorphismButton = ({ buttonTitle }) => {
  return <button className={styles.inButton}>{buttonTitle}</button>;
};

export default NeumorphismButton;
