import React from "react";
import styles from "./fadetitle.module.css";
import Fade from "react-reveal/Fade";
import { Typography } from "antd";

const FadeTitle = ({ title, description, type, titleType }) => {
  const { Text } = Typography;

  return (
    <div>
      {type === "fade" ? (
        <>
          <Fade left={titleType === "left"} bottom={titleType === "bottom"} big>
            <h1 className={styles.header}>{title}</h1>
          </Fade>
          <Fade bottom>
            <Text>{description}</Text>
          </Fade>
        </>
      ) : (
        <div>yok</div>
      )}
    </div>
  );
};

export default FadeTitle;
