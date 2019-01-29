import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout'
// import Img from 'gatsby-image'
import SEO from '../components/seo'

import BackgroundImage from 'gatsby-background-image'

import styled from 'styled-components'

// Styles
const HeroContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 950px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }  
`

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #000;
  width: 100%;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: -2px;

  @media (min-width: 480px) {
    width: 460px;
  }

  @media (min-width: 768px) {
    font-size: 68px;
    line-height: 74px;
    width: 640px;
  }

  @media (min-width: 1200px) {
    font-size: 72px;
    line-height: 84px;
  }
`

const HeroParagraph = styled.p`
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 24px;
  }
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

const HeroSection = ({ className }) => (
  <StaticQuery query={graphql`
    query {
      heroBackground: file(relativePath: { eq: "hero_image.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}
  render={data => {
    // Set ImageData.
    const imageData = data.heroBackground.childImageSharp.fluid
    return (
        <BackgroundImage Tag="div"
                         className={className}
                         fluid={imageData}
                         backgroundColor={"#eeeeef"}
        >
          <HeroContent>
            <HeroTitle>
              Breaking Down the Barriers
            </HeroTitle>
            <HeroParagraph>We work to make sure that everyone can use the technologies they encounter.</HeroParagraph>
          </HeroContent>
        </BackgroundImage>
    )
  }
  }
  />
)

const StyledHeroSection = styled(HeroSection)`
  width: 100%;
  padding: 4rem 0;
  background-position: 50% 100%;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <StyledHeroSection className="hero"/>

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
