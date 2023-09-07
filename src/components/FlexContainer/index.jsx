import React from "react";
import styles from "./FlexContainer.module.scss";

const FlexContainer = ({ children, title }) => {
  return (
    <>
      <h2 styles={styles.border}>{title}</h2>
      <div className={styles.bgRed}>{children}</div>
    </>
  );
};

export default FlexContainer;
