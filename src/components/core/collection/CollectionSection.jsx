import React from "react";
import styled from "styled-components";
import granImg from "../../../assets/home/desktop/image-gran-espresso.png";
import { collectionData } from "../../../constants/constants";

const CollectionSectionStyled = styled.div`
  margin-top: 250px;
  h1 {
  }
`;

const CollectionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
  text-align: center;
`;

const CoffeeType = styled.div`
  margin-right: 30px;
  img {
    width: 255px;
    height: 193px;
  }
  h2 {
    font-family: "Fraunces";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #333d4b;
    margin-top: 72px;
    margin-bottom: 24px;
  }
  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    text-align: center;
    color: #333d4b;
  margin-bottom: 24px;

  }
`;

function CollectionSection() {
  return (
    <CollectionSectionStyled>
      {/* <h1>our collection</h1> */}
      <CollectionTypeContainer>
        {collectionData.map((item) => (
          <CoffeeType>
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </CoffeeType>
        ))}
      </CollectionTypeContainer>
    </CollectionSectionStyled>
  );
}

export default CollectionSection;

{
  /* <CollectionTypeContainer>
        <CoffeeType>
          <img src={granImg} alt="" />
          <h2>Gran Espresso</h2>
          <p>
            Light and flavorful blend with cocoa and black pepper for an intense
            experience.
          </p>
        </CoffeeType>
      </CollectionTypeContainer> */
}
