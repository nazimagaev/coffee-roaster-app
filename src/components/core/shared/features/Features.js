import React from "react";
import { features } from "../../../../constants/constants";
import {
  FeaturesContainer,
  FeatureItems,
} from "../../../ui/shared/feature";
import { CreateYourPlanButton } from "../../shared/Button";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <FeaturesContainer>
      <FeatureItems>
        {features.map((feature) => {
          return <FeatureItem key={feature.order} {...feature} />;
        })}
      </FeatureItems>
      <CreateYourPlanButton>Create your plan</CreateYourPlanButton>
    </FeaturesContainer>
  );
};

export default Features;
