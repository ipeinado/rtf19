import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
	padding: 0 1rem;
	margin: 0 auto;
	width: 100%;

	@media (min-width: 992px) {
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