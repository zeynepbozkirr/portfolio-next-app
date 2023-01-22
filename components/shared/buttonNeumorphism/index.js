import React from "react";
import styles from "./index.module.css";

const NeumorphismButton = ({ buttonTitle }) => {
  return (
    <div>
      <button className={styles.inButton}>{buttonTitle}</button>
    </div>
  );
};

export default NeumorphismButton;
