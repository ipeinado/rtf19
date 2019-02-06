import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FluidContainer from '../components/fluidcontainer'

import BackgroundImage from 'gatsby-background-image'
import Image from 'gatsby-image'

import styled from 'styled-components'

import morphicLogo from "../images/animated-morphic-logo.svg"

const StyledBackgroundSection = styled(BackgroundImage)`
  width: 100%;
  padding: 6rem 0;
  background-repeat: no-repeat;
`

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <StyledBackgroundSection
      Tag="section"
      className="hero-section"
      fluid={props.data.heroBackground.childImageSharp.fluid}
      backgroundColor={`#eeeeef`}
    >
      <FluidContainer>
        <h1 style={{ 
          color: `#fff`, 
          textTransform: `uppercase`, 
          fontSize: 64,
          width: `70%`,
          textShadow: `1px 1px 4px rgba(0, 0, 0, .6)`,
        }}>
          Breaking Down the Barriers
        </h1>
        <p style={{ fontSize: 24, color: `#fff`, }}>We work to make sure that everyone can use the technologies they encounter.</p>
      </FluidContainer>
    </StyledBackgroundSection>

    <section id="stats-section">
      <FluidContainer>
        <Image fixed={props.data.kidsImage.childImageSharp.fixed} />
      </FluidContainer>
    </section>

    <StyledBackgroundSection
      Tag="section"
      className="gpii-section"
      fluid={props.data.gpiiBackground.childImageSharp.fluid}
      backgroundColor={`#ffffff`}
    >
      <FluidContainer>
        <h2>A World that Adapts to your needs</h2>
      </FluidContainer>
    </StyledBackgroundSection>

    <section id="morphic-section">
      <FluidContainer>
        <img src={ morphicLogo } alt="" />
      </FluidContainer>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    heroBackground: file(relativePath: { eq: "hero_image.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    kidsImage: file(relativePath: { eq: "kids_tablet.jpg" }) {
      childImageSharp {
        fixed(width: 420) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    gpiiBackground: file(relativePath: { eq: "gpii_background.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
` 
