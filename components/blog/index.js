import React, { forwardRef, useEffect } from "react";
import styles from "./blog.module.css";
import FadeTitle from "../shared/fadetitle";
import BlogPost from "../shared/blogpost";
import { Typography } from "antd";

// eslint-disable-next-line react/display-name
const BlogComp = forwardRef((props, ref) => {
  return (
    <div id="blog" ref={ref} className={styles.blog}>
      <FadeTitle
        dataAousTitle={"zoom-in-up"}
        title={"BLOG"}
        description={
          "I am researching and writing articles on the topics that I am curious about.\n" +
          "\n"
        }
      />

      {data.map((item, index) => {
        return (
          <div key={index}>
            <BlogPost
              inView={props.inView}
              item={item}
              direction={index}
            ></BlogPost>
          </div>
        );
      })}
    </div>
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
