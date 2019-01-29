import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout'
// import Img from 'gatsby-image'
import SEO from '../components/seo'

import BackgroundImage from 'gatsby-background-image'

import styled from 'styled-components'

import StatsSection from '../components/homepage/stats-container'
import GPIISection from '../components/homepage/gpii-section'

import morphicLogo from "../images/animated-morphic-logo.svg"

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

const MorphicContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 750px;
  }
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

    <StatsSection />
    
    <GPIISection />

    <MorphicContainer>
      <h2 style={{ fontSize: `40px`, }}>A Star is Born</h2>
      <img 
        src={morphicLogo}
        style={{
          width: `140px`,
        }}
      />
      <p style={{ fontSize: `20px`, lineHeight: `32px`, }}>Meet MORPHIC, the latest implementation of the GPII for auto personalization of Personal Computers that is being tested in several locations on the United States. </p>
    </MorphicContainer>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
