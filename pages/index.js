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
  const homeInView = useInView(homeRef);
  const techInView = useInView(techRef);

  useEffect(() => {
    console.log(homeInView, "HOME");
    console.log(techInView, "TECH");
  }, [homeInView, techInView]);

  return (
    <div className={styles.container}>
      <HomeComp ref={homeRef} />
      <TechnologiesComp ref={techRef} inView={techInView} />
      <ProjectComp />
      <BlogComp />
    </div>
  );
}
