import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
	padding: 0 1rem;
	margin: 0 auto;
	width: 100%;
	position: relative;
	overflow: hidden;

	@media (min-width: 992px) {
		padding-left: 0;
		padding-right: 0;
		width: 950px;
	}

	@media (min-width: 1200px) {
		width: 1170px;
	}
`

const FluidContainer = ({ children }) => (
	<Container>
		{children}
	</Container>
)

export default FluidContainer