import React from "react";
import styled from "styled-components";
import logo from "../../../../assets/shared/desktop/logo.svg";
import { navigationItems } from "../../../../constants/constants";
import { Link } from "react-router-dom";
import iconHamburger from "../../../../assets/shared/mobile/icon-hamburger.svg";

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 44px;

`;

const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    &:not(:last-child) {
      margin-right: 33px;
    }
  }

  img {
    display: none;
    @media (max-width: 700px) {
    display: block;
  }
  }
`;

const NavbarLink = styled(Link)`
  font-family: "Barlow", sans-serif;
  color: #83888f;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.923077px;
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: 700px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <NavbarStyled>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <NavbarLinks>
        {navigationItems.map((item) => {
          return (
            <li key={item.path}>
              <NavbarLink to={item.path}>{item.label}</NavbarLink>
            </li>
          );
        })}
        <img src={iconHamburger} alt="hamburger-icon" />
      </NavbarLinks>
    </NavbarStyled>
  );
}

export default Navbar;
