import React from "react";
import GlobalStyle from "../../ui/globalStyles";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";
import { Container } from "../../ui/shared";

import CollectionSection from "../collection/CollectionSection";
import GreatCoffeeSection from "../info/GreatCoffeeSection";



function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
