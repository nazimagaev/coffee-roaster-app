import React from "react";
import { FeatureItemContainer } from "../../../ui/shared/feature";

const FeatureItem = ({ order, title, subtitle }) => {
  return (
    <FeatureItemContainer>
      <h1>{order}</h1>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </FeatureItemContainer>
  );
};

export default FeatureItem;
