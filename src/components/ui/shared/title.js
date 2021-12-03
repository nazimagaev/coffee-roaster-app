import styled from "styled-components";

export const TitleContainer = styled.h3`
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 3.2rem;
  color: ${(props) => (props.color === "dark" ? "#333D4B" : "#FEFCF7")};
  @media (max-width: 992px) {
    font-size: 32px;
    margin-bottom: 3rem;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
