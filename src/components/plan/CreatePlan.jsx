import React from "react";
import styled from "styled-components";
import heroImg from "../../assets/plan/desktop/image-hero-blackcup.jpg";

const CreatePlanStyled = styled.div`
  margin-top: 45px;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  width: 100%;
  padding: 134px 85px;
  border-radius: 10px;
`;

const CreatePlanText = styled.div`
  h2 {
    font-family: "Fraunces";
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 72px;
    color: #fefcf7;
    margin-bottom: 32px;
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(254, 252, 247, 0.8);
    width: 445px;
  }
`;

function CreatePlan() {
  return (
    <CreatePlanStyled>
      <CreatePlanText>
        <h2>Create plan</h2>
        <p>
          Coffee the way you wanted it to be. For coffee delivered tomorrow, or
          next week. For whatever brew method you use. For choice, for
          convenience, for quality.
        </p>
      </CreatePlanText>
    </CreatePlanStyled>
  );
}

export default CreatePlan;
