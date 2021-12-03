import styled from "styled-components";

export const QualityContainer = styled.div`
  display: flex;
  padding: 8rem;
  background-color: #2c343e;
  border-radius: 10px;
  margin: 12rem 0;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 6rem 2rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 6rem 2rem;
    text-align: center;
  }
  .img-container {
    margin-top: -200px;

    @media (max-width: 768px) {
      margin-top: -130px;
      margin-left: auto;
      margin-right: auto;
    }
    img {
      border-radius: 10px;
      @media (max-width: 1024px) {
        width: 573px;
        height: 320px;
        object-fit: cover;
      }
      @media (max-width: 768px) {
        width: 279px;
        height: 156px;
        object-fit: cover;
      }
    }
  }
  .content- {
    margin-right: 12rem;
    @media (max-width: 1024px) {
      margin-right: 0;
      margin-top: 6.4rem;
    }
    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;
