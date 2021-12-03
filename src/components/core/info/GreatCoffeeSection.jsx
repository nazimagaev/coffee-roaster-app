import React from "react";
import styled from "styled-components";
import greatCoffeeImg from "../../../assets/home/desktop/image-hero-coffeepress.jpg";
import { CreateYourPlanButton } from "../shared/Button";

const GreatCoffeeSectionStyled = styled.div`
  background-image: url(${greatCoffeeImg});
  background-repeat: no-repeat;
  padding: 117px 85px;
  width: 100%;
  border-radius: 10px;

`;

const GreatCoffeeText = styled.div`
  max-width: 70%;
  h2 {
    font-family: "Fraunces";
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 72px;
    color: #fefcf7;
  }
  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #fefcf7;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-top: 32px;
    margin-bottom: 56px;
    width: 445px;
  }
`;

function GreatCoffeeSection() {
  return (
    <GreatCoffeeSectionStyled>
      <GreatCoffeeText>
        <h2>Great coffee made simple.</h2>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <CreateYourPlanButton>Create Your Plan</CreateYourPlanButton>
      </GreatCoffeeText>
    </GreatCoffeeSectionStyled>
  );
}

export default GreatCoffeeSection;
