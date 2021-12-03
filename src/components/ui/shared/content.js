import styled from "styled-components";

export const ContentContainer = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: ${(props) => (props.color === "dark" ? "#333d4b" : " #FEFCF7")};
  @media (max-width: 992px) {
    line-height: 25px;
  }
`;
