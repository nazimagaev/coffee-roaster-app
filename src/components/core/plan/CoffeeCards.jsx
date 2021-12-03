import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CoffeeCards = ({ answers }) => {
  const [active, setActive] = React.useState("");

  return (
    <CardsContainer>
      {answers.map((answer) => (
        <Card
          active={active}
          setActive={setActive}
          key={answer.id}
          answer={answer}
        />
      ))}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  margin-top: 56px;
`;

export default CoffeeCards;
