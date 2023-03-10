import React, { forwardRef, useEffect, useState } from "react";
import styles from "./blog.module.css";
import FadeTitle from "../shared/fadetitle";
import BlogPost from "../shared/blogpost";
import { Col, Row, Typography } from "antd";

// eslint-disable-next-line react/display-name
const BlogComp = forwardRef((props, ref) => {
  const [posts, setPosts] = useState("");

  const fetchMediumData = () => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bekir.ytm"
    )
      .then((response) => response.text())
      .then((result) => {
        setPosts(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchMediumData();
  }, []);
  console.log(posts.items, "post");

  return (
    <Row id="blog" ref={ref} className={styles.blog}>
      <FadeTitle
        dataAousTitle={"zoom-in-up"}
        title={"BLOG"}
        description={
          "I am researching on the topics that I am curious about.\n" + "\n"
        }
      />

      <div style={{ marginBottom: 100, width: "100%" }}>
        {posts.items?.map((item, index) => {
          return (
            <BlogPost
              key={index}
              inView={props.inView}
              item={item}
              direction={index % 2 ? "fade-up-right" : "fade-up-left"}
            ></BlogPost>
          );
        })}
      </div>
    </Row>
  );
});

export default BlogComp;

const data = [
  {
    date: "Ara 10, 2020\n",
    topic: "JAVASCRIPT",
    title: "BEM (BLOCK__ELEMENT — MODIFIER)",
    description:
      "When starting a project, sometimes things get too rambunctious and naming gets really complicated, and at the end of the day you may even find yourself in a spaghetti pile of code.\n" +
      "\n",
  },
  {
    date: "Ara 15, 2020\n",
    topic: "css",
    title: "CSS RESET AND CSS NORMALIZE",
    description:
      "The argmuent of which approach should be used to eliminate the differences between styles is an ongoing debate between Normlize CSS and Reset CSS.\n" +
      "\n",
  },
  {
    date: "Mar 05, 2020\n",
    topic: "html",
    title: "WHAT IS CLEAN CODE?",
    description:
      "Firstly, writing clean code is an investmen for the future. To save time on coding in the future, one should spend some time on writing clean code at the beginning\n" +
      "\n",
  },
];
