import React from "react";
import FlexContainer from "../FlexContainer";
import styles from "../FlexContainer/FlexContainer.module.scss";

const CardList = () => {
  return (
    <FlexContainer styleProp={styles.flexContainer}>
      <button className={styles.redBtn}>first</button>
      <button className={styles.greenBtn}>second</button>
      <button className={styles.pinkBtn}>third</button>
      <button className={styles.oargeBtn}>fourth</button>
    </FlexContainer>
  );
};

export default CardList;
