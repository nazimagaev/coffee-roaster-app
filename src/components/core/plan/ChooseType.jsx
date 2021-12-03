import React from "react";
import styled from "styled-components";
import { subscribeQuestions } from "../../../constants/constants";
import CoffeeType from "../plan/CoffeeType";
import Details from "./Details";
import OrderSummary from "./OrderSummary";

const ChooseType = () => {
  return (
    <ChooseTypeContainer>
      <Details />
      <Questions>
        {subscribeQuestions.map((option) => {
          return <CoffeeType option={option} />;
        })}
        <OrderSummary />
      </Questions>
    </ChooseTypeContainer>
  );
};

const ChooseTypeContainer = styled.div`
  display: flex;
  gap: 0 120px;
  margin-top: 160px;
`;
const Questions = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default ChooseType;
