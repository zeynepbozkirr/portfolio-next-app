import React from "react";
import styles from "./header.module.css";
import { Col, Row } from "antd";
import Link from "next/link";

const HeaderComp = () => {
  return (
    <Row className={styles.navbar}>
      <Col className={styles.logo} offset={1} xs={23} sm={11} md={11} lg={11}>
        <Link href="/">BEKİR YETİM</Link>
      </Col>
      <Col className={styles.ul} offset={1} xs={23} sm={11} md={11} lg={11}>
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
    </Row>
  );
};

export default HeaderComp;
