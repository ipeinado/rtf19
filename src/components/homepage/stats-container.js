import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const StatsContainer = styled.section`
	padding: 0 1rem;
	margin: 4rem auto;
	position: relative;

	& > .kids-image {
		display: none !important;
	}

	@media (min-width: 768px) {
		& > .kids-image {
			display: inline-block !important;
		}
	}

	@media (min-width: 992px) {
		width: 950px;
	}

	@media (min-width: 1200px) {
		width: 1170px;
	}
`

const StyledImage = styled(Image)`
	border-radius: 100%;
`

const StatsContent = styled.div`
	background: rgba(255, 255, 255, .3);
	padding: 0 1rem;
	@media (min-width: 768px) {
		position: absolute;
		top: 20%;
		margin-left: 360px;
	}

	@media (min-width: 1200px) {
		width: 600px;
	}
`

const StatsTitle = styled.h2`
	font-size: 40px;
	margin-bottom: 12px;
`

const StatsText = styled.p`
	font-size: 20px;
	line-height: 32px;
`

const StatsSection = ({ data }) => (
	<StaticQuery query={ graphql`
		query {
			imageKids: file(relativePath: { eq: "kids_tablet.jpg"}) {
				childImageSharp {
					fixed(width: 420) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
		}
	`}
	render={ data => (
		<StatsContainer>
			<StyledImage fixed={ data.imageKids.childImageSharp.fixed } className="kids-image" alt="" />
			<StatsContent>
				<StatsTitle>One billion people</StatsTitle>
				<StatsText>
					around the world experience some form of disability, and a greater number experience literacy or socioeconomic problems that put them in the wrong side of the digital divide. Many of these people cannot access all the resources and benefits their peers can because they require a special interface accommodation of some type.
				</StatsText>
			</StatsContent>
		</StatsContainer>
	)}
	/>
)

export default StatsSection