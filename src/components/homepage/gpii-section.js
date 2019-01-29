import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const GPIIContentContainer = styled.div`
	padding: 6rem 1rem;
	margin: 0 auto;

	@media (min-width: 992px) {
		width: 992px;
	}

	@media (min-width: 1200px) {
		width: 1170px;
	}
`

const GPIIContent = styled.div`
	@media (min-width: 992px) {
		width: 750px;
	}
`

const GPIITitle = styled.h2`
	font-size: 40px;
	color: #fff;
`

const GPIIText = styled.p`
	font-size: 20px;
	line-height: 32px;
	color: #fff;
`

const GPIISection = ({ data }) => (
	<StaticQuery
		query={ graphql`
			query {
				gpiiBackground: file(relativePath: { eq: "gpii_background.jpg"}) {
					childImageSharp {
						fluid(quality: 80, maxWidth: 1600) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`} 
		render={data => {
			const imageData = data.gpiiBackground.childImageSharp.fluid
			return (
        <BackgroundImage Tag="section"
                         className={"gpii"}
                         fluid={imageData}
                         backgroundColor={"#eeeeef"}
        >
        	<GPIIContentContainer>
        		<GPIIContent>
	        		<GPIITitle>A World that Adapts to your Needs</GPIITitle>
	        		<GPIIText>
	        			Our main goal is to build the Global Public Inclusive Infrastructure (GPII). The GPII will combine cloud computing, web, and platform services to make access simpler, more inclusive, available everywhere, and more affordable.
	        		</GPIIText>
        		</GPIIContent>
        	</GPIIContentContainer>
        </BackgroundImage>
      )
		}
	}
	/>
)

export default GPIISection