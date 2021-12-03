import styled from "styled-components";

export const CommitmentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16.8rem 8rem;
  @media (max-width: 1024px) {
    padding: 14rem 2rem;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12rem 2rem;
    text-align: center;
  }
  .img-container {
    border-radius: 10px;
    overflow: hidden;

    flex: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content-container {
    margin-left: 12rem;
    flex: 1.2;
    @media (max-width: 1024px) {
      margin-left: 6rem;
      margin-top: 4.8rem;
    }
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 4.8rem;
      max-width: 100%;
    }
  }
`;
