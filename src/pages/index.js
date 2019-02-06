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
  padding: 2rem 0;
  background-repeat: no-repeat;
`

const PageTitle = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-transform: uppercase;
`

const SectionContainer = styled.div`
  padding: 4rem 1rem;
  position: relative;
  margin: 0 auto;

  @media (min-width: 992px) {
    padding-left: 0;
    padding-right: 0;
    width: 950px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const SectionContent = styled.div`
  @media (min-width: 992px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }

  &.stats-section-content {
    @media (min-width: 992px) {
      position: absolute;
      margin-left: 33%;
      width: 60%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &.morphic-section-content {
    margin: 0 auto;
    text-align: center;
  }
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
  margin-bottom: 2.4rem;
`

const LearnMoreButton = styled(Link)`
  background-color: #F5BE38;
  padding: 1rem;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    background-color: #FFDC76;
  }
`

const StatsSectionImage = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 35%;
  }
`

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <StyledBackgroundSection
      Tag="section"
      className="hero-section"
      fluid={props.data.heroBackground.childImageSharp.fluid}
      backgroundColor={`#eeeeef`}
      style={{ padding: `4rem 0`, }}
    >
      <SectionContainer>
        <SectionContent>
          <PageTitle>
            Breaking Down the Barriers
          </PageTitle>
          <p style={{ fontSize: 24, color: `#fff`, }}>We work to make sure that everyone can use the technologies they encounter.</p>
      </SectionContent>
      </SectionContainer>
    </StyledBackgroundSection>

    <section id="stats-section">
      <SectionContainer>
        <StatsSectionImage>
          <Image 
            fluid={props.data.kidsImage.childImageSharp.fluid}
          />
        </StatsSectionImage>
        <SectionContent className="stats-section-content">
          <SectionTitle>Over 1 billion people</SectionTitle>
          <SectionText>
            around the world experience some form of disability, and a
            greater number literacy problems. Many of these people
            cannot beneﬁt from the use of novel technologies as their
            peers can, because they require a special interface
            accommodation of some type.
          </SectionText>
          <LearnMoreButton to="/">Learn more</LearnMoreButton>
        </SectionContent>
      </SectionContainer>
    </section>

    <StyledBackgroundSection
      Tag="section"
      className="gpii-section"
      fluid={props.data.gpiiBackground.childImageSharp.fluid}
      backgroundColor={`#ffffff`}
    >
      <SectionContainer>
        <SectionContent style={{ paddingTop: 0, color: '#fff', }}>
          <SectionTitle style={{ color: `#fff`, }}>
            A World that Adapts to your needs
          </SectionTitle>
          <SectionText>
            Our main goal is to build the Global Public Inclusive
            Infrastructure (GPII). The GPII will combine cloud computing,
            web, and platform services to make access simpler, more
            inclusive, available everywhere, and more affordable.
          </SectionText>
          <LearnMoreButton to="/">Learn more</LearnMoreButton>
        </SectionContent>
      </SectionContainer>
    </StyledBackgroundSection>

    <section id="morphic-section">
      <SectionContainer>
        <SectionContent className="morphic-section-content">
          <SectionTitle>A Star is Born</SectionTitle>
          <div 
            style={{
              width: 180,
              margin: `2rem auto 0`,
            }}
          >
            <a href="https://morphic.world"><img src={ morphicLogo } alt="" style={{ maxWidth: `100%`, }}/></a>
          </div>
          <SectionText>Meet MORPHIC, the latest implementation of the GPII for auto personalization of Personal Computers that is being tested in several locations on the United States.</SectionText>
          <LearnMoreButton to="/">Learn more</LearnMoreButton>
          
        </SectionContent>
      </SectionContainer>
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
        fluid(maxWidth: 420) {
          ...GatsbyImageSharpFluid_withWebp
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
