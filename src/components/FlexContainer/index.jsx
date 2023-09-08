import React from "react";

const FlexContainer = ({ children, styleProp }) => {
  return <div className={styleProp}>{children}</div>;
};

export default FlexContainer;
