import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeComp from "../components/homepage";
import TechnologiesComp from "../components/technologies";
import ProjectComp from "../components/projects";
import BlogComp from "../components/blog";
import { useInView } from "framer-motion";

export default function Home() {
  const homeRef = useRef(null);
  const techRef = useRef(null);
  const blogRef = useRef(null);
  const homeInView = useInView(homeRef);
  const techInView = useInView(techRef);
  const blogInview = useInView(blogRef);

  useEffect(() => {
    console.log(homeInView, "HOME");
    console.log(techInView, "TECH");
    console.log(blogInview, "blog");
  }, [homeInView, techInView, blogInview]);

  return (
    <div className={styles.container}>
      <HomeComp ref={homeRef} />
      <TechnologiesComp ref={techRef} inView={techInView} />
      <ProjectComp />
      <BlogComp ref={blogRef} inView={blogInview} />
    </div>
  );
}
