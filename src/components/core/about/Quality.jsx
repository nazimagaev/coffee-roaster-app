import React from "react";
import { QualityContainer } from "../../ui/Quality";
import { ContentContainer } from "../../ui/shared/content";
import Title from "../shared/Title";
import QualityImg from "../../../assets/about/desktop/image-quality.jpg";

function Quality() {
  return (
    <QualityContainer>
      <div className="content-container">
        <Title title="Uncompromising quality" color="light" />
        <ContentContainer>
          Although we work with growers who pay close attention to all
          stages of harvest and processing, we employ, on our end, a
          rigorous quality control program to avoid over-roasting or baking
          the coffee dry. Every bag of coffee is tagged with a roast date
          and batch number. Our goal is to roast consistent, user-friendly
          coffee, so that brewing is easy and enjoyable.
        </ContentContainer>
      </div>
      <div className="img-container">
        <img src={QualityImg} alt="quality" />
      </div>
    </QualityContainer>
  );
}

export default Quality;
