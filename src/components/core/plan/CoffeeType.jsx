import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import CoffeeCards from "./CoffeeCards";
import { Container } from "../../ui/shared";
// import { ReactComponent as UpArrow } from "../../../assets/icons/up-arrow.svg";
// <UpArrow />

const CoffeeType = ({ option }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CoffeTypeContainer>
      <h2 onClick={() => setIsOpen((s) => !s)}>{option.question}</h2>
      {isOpen && <CoffeeCards answers={option.answers} />}
    </CoffeTypeContainer>
  );
};

const CoffeTypeContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 90px;
  }
  h2 {
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    color: #83888f;
  }
`;

export default CoffeeType;
