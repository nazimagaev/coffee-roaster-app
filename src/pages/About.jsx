import React from "react";
import OurCommitment from "../components/core/about/OurCommitment";
import Quality from "../components/core/about/Quality";
import Layout from "../components/core/shared/Layout";

import OurHeadquarters from "../components/headquarters/OurHeadquarters";

const About = () => {
  return (
    <Layout>
      <OurCommitment />
      <Quality />
      <OurHeadquarters />
    </Layout>
  );
};

export default About;
