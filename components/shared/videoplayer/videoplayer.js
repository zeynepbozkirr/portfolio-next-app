import React from "react";
import styles from "./vieoplayer.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import { Col } from "antd";

const HoverVideoPlay = ({ link, video }) => {
  return (
    // <Col className={styles.videoPlayer}>
    <HoverVideoPlayer
      className={styles.videoPlayer}
      restartOnPaused
      overlayTransitionDuration={500}
      videoSrc="Mfet.mp4"
      pausedOverlay={
        <img
          src="thumbnail-image.jpg"
          alt=""
          style={{
            // width: "50px",
            // height: "50px",
            objectFit: "cover",
          }}
        />
      }
      hoverOverlay={
        <div className={styles.hoverOverlay}>
          <a style={{ color: "back" }} href="/video-page">
            <h1>App Store</h1>
          </a>
          <a style={{ color: "back" }} href="/video-page">
            <h1> Play Store</h1>
          </a>
        </div>
      }
    />
    // </Col>
  );
};

export default HoverVideoPlay;
