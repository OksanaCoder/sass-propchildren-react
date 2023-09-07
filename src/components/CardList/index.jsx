import React from "react";
import FlexContainer from "../FlexContainer";
import styles from "./CardList.module.scss";

const CardList = () => {
  return (
    <div className={styles.centering}>
      <FlexContainer title="First Title for List">
        <p>first</p>
        <p>second</p>
        <p>third</p>
        <p>fourth</p>
      </FlexContainer>
      <FlexContainer title="Second Title for buttons">
        <button>1</button>

        <button>2</button>

        <button>3</button>

        <button>4</button>
      </FlexContainer>
    </div>
  );
};

export default CardList;
