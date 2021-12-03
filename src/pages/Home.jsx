import React from "react";
import CollectionSection from "../components/core/collection/CollectionSection";
import GreatCoffeeSection from "../components/core/info/GreatCoffeeSection";
import Layout from "../components/core/shared/Layout";
import Features from "../components/core/shared/features/Features";

function Home() {
  return (
    <Layout>
      <GreatCoffeeSection />
      <CollectionSection />
      <Features />
    </Layout>
  );
}

export default Home;
