import styles from "./Card.module.css";
import React, { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode }> = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
