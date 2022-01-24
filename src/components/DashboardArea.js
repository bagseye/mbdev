import React from "react";
import Layout from "./Layout";
import SEO from "./SEO";
import CardContainer from "./Cards/CardContainer";
import Card from "./Cards/Card";
import useAllAgency from "../hooks/use-all-agency";

const DashboardArea = () => {
  const agencyData = useAllAgency();

  return (
    <>
      <SEO title="Agency Projects" noIndex />
      <Layout>
        <div className="container sectiongap">
          <div className="content__area">
            <h1>Agency Projects</h1>
          </div>
        </div>
        <CardContainer>
          {agencyData.map((node, index) => {
            return (
              <Card key={index} node={node} to={node.slug} route="/agency" />
            );
          })}
        </CardContainer>
      </Layout>
    </>
  );
};

export default DashboardArea;
