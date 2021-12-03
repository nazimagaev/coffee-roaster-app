import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FooterLogo from "../../../../assets/logo.png";

import {
  navigationItems,
  socialMediaAccounts,
} from "../../../../constants/constants";

const FooterNavigation = () => {
  return (
    <Nav>
      <Link to="/">
        <img className="logo" src={FooterLogo} alt="logo" />
      </Link>
      <ul className="nav-menu">
        {navigationItems.map((navItem) => {
          return (
            <li>
              <StyledLink to={navItem.path}>{navItem.label}</StyledLink>
            </li>
          );
        })}
      </ul>
      <ul className="social-media">
        {socialMediaAccounts.map((account) => (
          <li key={account.path}>
            <a href={account.path}>
              <img src={account.icon} alt="icon" />
            </a>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default FooterNavigation;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
  .nav-menu {
    list-style: none;
    display: flex;
    list-style: none;
    @media (max-width: 992px) {
      margin: 33px 0 65px 0;
    }
    @media (max-width: 576px) {
      flex-direction: column;
      margin: 48px 0;
    }
    li {
      &:not(:first-child) {
        margin-left: 33px;
        @media (max-width: 576px) {
          margin-left: 0;
        }
      }
      @media (max-width: 576px) {
        &:not(:last-child) {
          margin-bottom: 2.5rem;
        }
      }
    }
  }
  .logo {
    width: 236px;
    height: 26px;
    margin-right: 100px;

    @media (max-width: 992px) {
      margin-right: 0;
    }
  }
  .social-media {
    list-style: none;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
    @media (max-width: 992px) {
      margin-left: 0;
    }
    @media (max-width: 576px) {
      margin-left: 0;
    }
    a {
      &:not(:last-child) {
        margin-right: 25px;
      }

      img {
        width: 20px;
        height: 20px;
        object-fit: cover;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.923077px;
  text-transform: uppercase;
  text-decoration: none;
  color: #83888f;
  transition: all 0.3s;
  &:hover {
    color: #fff;
  }
`;
