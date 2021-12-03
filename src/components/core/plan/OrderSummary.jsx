import React from "react";
import styled from "styled-components";

const OrderSummary = () => {
  return (
    <SummaryContainer>
      <h3>
        “I drink my coffee as <span></span>, with a <span></span> type of
        bean. 250g ground ala Cafetiare, sent to me Every Week.”
      </h3>
    </SummaryContainer>
  );
};
const SummaryContainer = styled.div`
  padding: 2.7rem 6.4rem;
  background-color: #2c343e;
  color: #fff;
  border-radius: 10px;
  h3 {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;
    span {
      border-bottom: 1px dashed #fff;
      width: 6ch;
      height: 3px;
      display: inline-block;
    }
  }
`;

export default OrderSummary;
