import React from "react";
import styles from "./blog.module.css";
import FadeTitle from "../shared/fadetitle";
import BlogPost from "../shared/blogpost";

const BlogComp = () => {
  return (
    <div id="blog" className={styles.blog}>
      <FadeTitle
        titleType={"top"}
        title={"BLOG"}
        description={
          "I am researching and writing articles on the topics that I am curious about.\n" +
          "\n"
        }
      />

      <BlogPost data={data} />
    </div>
  );
};

export default BlogComp;

const data = [
  {
    date: "Ara 10, 2020\n",
    topic: "JAVASCRIPT",
    title: "title1",
    description:
      "When starting a project, sometimes things get too rambunctious and naming gets really complicated, and at the end of the day you may even find yourself in a spaghetti pile of code.\n" +
      "\n",
  },
  {
    date: "Ara 15, 2020\n",
    topic: "css",
    title: "title2",
    description:
      "The argmuent of which approach should be used to eliminate the differences between styles is an ongoing debate between Normlize CSS and Reset CSS.\n" +
      "\n",
  },
  {
    date: "Mar 05, 2020\n",
    topic: "html",
    title: "title3",
    description:
      "Firstly, writing clean code is an investmen for the future. To save time on coding in the future, one should spend some time on writing clean code at the beginning\n" +
      "\n",
  },
];
