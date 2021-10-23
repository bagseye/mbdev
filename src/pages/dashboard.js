import React from "react";
import { Router } from "@reach/router";
import { login, isAuthenticated, getProfile } from "../utils/auth";
import Agency from "../components/Agency";
import Redirect from "../components/Redirect";
import DashboardArea from "../components/DashboardArea";
import { useStaticQuery, graphql } from "gatsby";

const Dashboard = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAgency {
        edges {
          node {
            name
            slug
            excerpt
            technology
            website
            images {
              description
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP]
                quality: 90
              )
            }
            richDescription {
              raw
            }
          }
        }
      }
    }
  `);

  const agencyData = data.allContentfulAgency.edges;

  if (!isAuthenticated()) {
    login();

    return <Redirect />;
  }

  const user = getProfile();

  return (
    <>
      <Router>
        <DashboardArea path="/dashboard/" user={user} />
        {agencyData.map(({ node }, index) =>
          node.slug ? (
            <Agency
              key={index}
              data={node}
              next={agencyData[index + 1]}
              path={`/dashboard/${node.slug}`}
            />
          ) : null
        )}
      </Router>
    </>
  );
};

export default Dashboard;
