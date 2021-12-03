import React from "react";
import styled from "styled-components";

const Card = ({ active, answer, setActive }) => {
  return (
    <CardContainer
      selected={active === answer.id ? true : false}
      key={answer.id}
      onClick={() => setActive(answer.id)}
    >
      <h3>{answer.title}</h3>
      <p>{answer.description}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 32px 28px 84px 28px;
  cursor: pointer;
  background: ${(props) =>
    props.selected === true ? "#0E8784" : "#F4F1EB;"};
  border-radius: 8px;
  max-height: 250px;

  &:hover {
    background: ${(props) =>
      props.selected === true ? "#0E8784" : "#fdd6ba;"};
    p,
    h3 {
      ${(props) => (props.selected === true ? "#fff" : "#333d4b;")};
    }
  }

  h3 {
    text-transform: capitalize;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    font-family: "Fraunces", sans-serif;
    color: ${(props) => (props.selected === true ? "#fff" : "#333d4b;")};
  }
  p {
    font-family: "Barlow", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${(props) => (props.selected === true ? "#fff" : "#333d4b;")};
    margin-top: 24px;
  }
`;

export default Card;
