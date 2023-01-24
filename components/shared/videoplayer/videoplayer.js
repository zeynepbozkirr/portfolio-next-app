import React from "react";
import styles from "./vieoplayer.module.css";
import { Card, Col, Row } from "antd";
import HoverVideoPlayer from "react-hover-video-player";

const HoverVideoPlay = () => {
  const { Meta } = Card;

  return (
    <div
      style={{
        width: "400px",
        // height: "400px",
      }}
    >
      <HoverVideoPlayer
        restartOnPaused
        overlayTransitionDuration={500}
        videoSrc="reactvideo.mp4"
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
          <div className="hover-overlay">
            <h1>Video Title</h1>
            <p style={{ color: "white" }}>
              Here is a short description of the video. You can still see the
              video playing underneath this overlay.
              <a style={{ color: "white" }} href="/video-page">
                Click here to read more
              </a>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default HoverVideoPlay;
