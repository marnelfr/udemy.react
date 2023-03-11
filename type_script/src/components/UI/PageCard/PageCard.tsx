import React, { ReactNode } from "react";
import styles from "./PageCard.module.css";

const PageCard: React.FC<{ children: ReactNode }> = (props) => {
  return <section className={styles.section}>{props.children}</section>;
};

export default PageCard;
