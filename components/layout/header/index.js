import React from "react";
import styles from "./header.module.css";
import { Col, Row } from "antd";
import Link from "next/link";
import { BlogWritingSvgrepoCom } from "../../icons";

const HeaderComp = () => {
  return (
    <Row className={styles.navbar}>
      <Col className={styles.logo} offset={1} xs={23} sm={10} md={10} lg={10}>
        <Link href="/">BEKİR YETİM</Link>
      </Col>
      <Col className={styles.ul} offset={1} xs={22} sm={10} md={10} lg={10}>
        <Link href="/#technologies">
          <li>Technologies</li>
        </Link>
        <Link href="/#projects">
          <li>Projects</li>
        </Link>
        <Link href="/#blog">
          <li>Blog</li>
        </Link>
      </Col>
      <Col offset={1} xs={1} sm={1} md={1} lg={1} className={styles.blogIcon}>
        <Link href="https://new-blog-alpha-taupe.vercel.app/">
          <BlogWritingSvgrepoCom />
        </Link>
      </Col>
    </Row>
  );
};

export default HeaderComp;
