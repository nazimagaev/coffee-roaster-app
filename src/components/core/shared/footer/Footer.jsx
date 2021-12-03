import React from "react";
import styled from "styled-components";

import FooterNavigation from "./FooterNavigation";

function Footer() {
  return (
    <FooterContainer>
      <FooterNavigation />
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  padding: 47px 85px;
  background-color: #2c343e;
  margin-top: 150px;
`;
