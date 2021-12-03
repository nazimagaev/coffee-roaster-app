import React from "react";
import ChooseType from "../components/core/plan/ChooseType";
import Layout from "../components/core/shared/Layout";
import CreatePlan from "../components/plan/CreatePlan";
const Subscribe = () => {
  return (
    <Layout>
      <CreatePlan />
      <ChooseType />
    </Layout>
  );
};

export default Subscribe;
