import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Content = styled.aside`
  padding: 0 15px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 414px) {
    padding: 0 20px;
  }

  @media (min-width: 834px) {
    padding: 0 30px;
  }

  @media (min-width: 1440px) {
    padding: 0 40px;
  }
`

const FullWidthImg = () => {
  const queryResponse = useStaticQuery(getImage)
  return (
    <Content>
      <Img fluid={queryResponse.fluid.childImageSharp.fluid} />
    </Content>
  )
}

export default FullWidthImg

const getImage = graphql`
  query {
    fluid: file(relativePath: { eq: "bonneville-bag-mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
