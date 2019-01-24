import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import styled from 'styled-components'

const HeroContainer = styled.div`
  background-color: "#eeeeef";
  padding: 6rem 0;
`

const HeroTitle = styled.h1`
  font-size: 96px;
`

const HeroMessage = styled.p`
  font-size: 24px;
`

const StatsContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: 33%;
  }
`

const GPIIContainer = styled.div`
  background-color: #004065;
  color: #fff;
`

const MorphicContainer = styled.div`
  text-align: center;
`

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <HeroContainer>
      <Img fluid={props.data.heroImage.childImageSharp.fluid} />
      <HeroTitle>Breaking Down the Barriers</HeroTitle>
      <HeroMessage>We work to make sure that everyone can use the technologies they encounter.</HeroMessage>
    </HeroContainer>

    <StatsContainer>
      <h2>Over 1 billion people</h2>
      <p>around the world experience some form of disability, and a greater number experience literacy or socioeconomic problems that put them in the wrong side of the digital divide. Many of these people cannot access all the resources and benefits their peers can because they require a special interface accommodation of some type.</p>
      <Link to="/" className="something">Learn More</Link>
    </StatsContainer>
    
    <GPIIContainer>
      <h2>A World that Adapts to your needs</h2>
      <p>Our main goal is to build the Global Public Inclusive Infrastructure (GPII). The GPII will combine cloud computing, web, and platform services to make access simpler, more inclusive, available everywhere, and more affordable.</p>
      <Link to="/" className="something">Learn More</Link>
    </GPIIContainer>

    <MorphicContainer>
      <h2>A Star is Born</h2>
      <p>Meet MORPHIC, the latest implementation of the GPII for auto personalization of Personal Computers that is being tested in several locations on the United States. </p>
    </MorphicContainer>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero_image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
