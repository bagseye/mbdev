import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Router } from '@reach/router';
import Layout from '../components/Layout';
import PrivateRoute from '../components/PrivateRoute';
import Agency from '../components/Agency';
import Login from '../components/Login';
import AgencyProject from '../components/AgencyProject';

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
            richDescription {
              json
            }
            images {
              description
              fluid(maxWidth: 2000) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const agencyData = data.allContentfulAgency.edges;

  return (
    <Layout>
      <Router>
        <PrivateRoute path="/dashboard/agency" component={Agency} />
        {agencyData.map(({ node }) =>
          node.slug ? (
            <PrivateRoute
              path={`/dashboard/agency/${node.slug}`}
              component={AgencyProject}
              agencyData={node}
            />
          ) : null
        )}
        <Login path="/dashboard/login" />
      </Router>
    </Layout>
  );
};

export default Dashboard;
