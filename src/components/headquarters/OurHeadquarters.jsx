import React from "react";
import styled from "styled-components";
import { headquarters } from "../../constants/constants";

const OurHeadquartersContainer = styled.div`
  padding: 170px 85px;

  @media only screen and (max-width: 840px) {
    padding-right: 0;
  }

  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const OurHeadquartersStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));

  @media only screen and (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(327px, 1fr));
  }
`;

const AdressContainer = styled.div`
  img {
    margin-top: 72px;
    margin-bottom: 50px;
  }
  h2 {
    font-family: "Fraunces";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;
    color: #333d4b;
    margin-bottom: 21px;
  }
`;
const HeadquartersItems = styled.div`
  list-style: none;
  li {
    font-family: "Barlow";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #333d4b;
  }
`;
const OurHeadquartersTitle = styled.h2`
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  color: #83888f;
`;

function OurHeadquarters() {
  return (
    <OurHeadquartersContainer>
      <OurHeadquartersTitle>Our headquarters</OurHeadquartersTitle>
      <OurHeadquartersStyled>
        {headquarters.map((item) => (
          <AdressContainer key={item.location}>
            <img src={item.img} alt={item.country} />
            <h2>{item.country}</h2>
            <HeadquartersItems>
              <li>{item.adress}</li>
              <li>{item.state}</li>
              <li>{item.location}</li>
              <li>{item.mobile}</li>
            </HeadquartersItems>
          </AdressContainer>
        ))}
      </OurHeadquartersStyled>
    </OurHeadquartersContainer>
  );
}

export default OurHeadquarters;
