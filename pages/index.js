import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeComp from "../components/homepage";
import TechnologiesComp from "../components/technologies";
import ProjectComp from "../components/projects";
import BlogComp from "../components/blog";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeComp />
      <TechnologiesComp />
      <ProjectComp />
      <BlogComp />
    </div>
  );
}
