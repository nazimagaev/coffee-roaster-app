import styled from "styled-components";

export const FeaturesContainer = styled.div`
  padding-left: 85px;
  @media (max-width: 992px) {
    padding: 0 4rem;
  }
`;

export const FeatureItems = styled.div`
  display: grid;
  gap: 0 90px;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  position: relative;
  max-width: 1045px;
  margin-top: 80px;
  @media (max-width: 992px) {
    gap: 56px 10px;
  }
  @media (max-width: 776px) {
    text-align: center;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 73%;
    height: 2px;
    background-color: #fdd6ba;

    @media (max-width: 1200px) {
      display: none;
    }
  }
  /* &::after{
    content:"";
    position: absolute;
    top:-15px;
    right: -35px;
    width: 31px;
    height: 31px;
    border-radius: 50%;
   border: 2px solid #0E8784;
  } */
`;
export const FeatureItemContainer = styled.div`
  /* padding-right: 95px; */
  /* &:not(:last-child){
    border-top:2px solid #FDD6BA;
  } */

  position: relative;

  h1 {
    font-weight: 900;
    font-size: 72px;
    line-height: 72px;
    margin-bottom: 3.8rem;
    color: #fdd6ba;
    &::after {
      content: "";
      position: absolute;
      top: -17.5px;
      left: 0px;
      width: 31px;
      height: 31px;
      border-radius: 50%;
      border: 2px solid #0e8784;
      background: #fefcf7;
      margin-bottom: 50px;
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
  h3 {
    font-weight: 900;
    font-size: 32px;
    line-height: 36px;
    color: #333d4b;
    padding-right: 30px;
    height: 72px;
    @media (max-width: 776px) {
      font-size: 28px;
      line-height: 32px;
    }
  }
  p {
    margin-top: 43px;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #333d4b;
    @media (max-width: 992px) {
      margin-top: 24px;
      font-size: 15px;
    }
  }
`;
