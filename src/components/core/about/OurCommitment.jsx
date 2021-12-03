import React from "react";
import { CommitmentContainer } from "../../ui/OurCommitment";
import CommitmentImg from "../../../assets/about/desktop/image-commitment.jpg";
import Title from "../shared/Title";
import {ContentContainer } from "../../ui/shared/content";

function OurCommitment() {
  return (
    <CommitmentContainer>
      <div className="img-container">
        <img src={CommitmentImg} alt="" />
      </div>
      <div className="content-container">
        <Title color="dark" title="Our Commitment" />
        <ContentContainer color="dark">
          We’re built on a simple mission and a commitment to doing good
          along the way. We want to make it easy for you to discover and
          brew the world’s best coffee at home. It all starts at the
          source. To locate the specific lots we want to purchase, we
          travel nearly 60 days a year trying to understand the challenges
          and opportunities in each of these places. We collaborate with
          exceptional coffee growers and empower a global community of
          farmers through with well above fair-trade benchmarks. We also
          offer training, support farm community initiatives, and invest in
          coffee plant science. Curating only the finest blends, we roast
          each lot to highlight tasting profiles distinctive to their
          native growing region.
        </ContentContainer>
      </div>
    </CommitmentContainer>
  );
}

export default OurCommitment;
