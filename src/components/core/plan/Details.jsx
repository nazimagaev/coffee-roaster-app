import React from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <DetailsContainer>
      <ul>
        <li>
          <span>01</span>Preferences
        </li>
        <li>
          <span>02</span>Bean Type
        </li>
        <li>
          <span>03</span>Quantity
        </li>
        <li>
          <span>04</span>Grind Option
        </li>
        <li>
          <span>05</span>Deliveres
        </li>
      </ul>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  flex-basis: 255px;
  @media (max-width: 992px) {
    display: none;
  }
  ul {
    list-style: none;
    li {
      font-family: "Fraunces", sans-serif;
      font-weight: 900;
      font-size: 24px;
      line-height: 32px;
      color: #83888f;
      padding: 25px 0;
      &:not(:last-child) {
        border-bottom: 1px solid #83888f;
      }
      span {
        margin-right: 25px;
      }
    }
  }
`;

export default Details;
