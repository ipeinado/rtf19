import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
	padding: 0 1rem;
	margin: 3rem auto;
	width: 100%;
	position: relative;
	overflow: hidden;

  @media (min-width: 768px) {
    width: 80%;
  }

	@media (min-width: 992px) {
		padding-left: 0;
		padding-right: 0;
		width: 60%;
	}

	@media (min-width: 1200px) {
		width: 50%;
	}
`

const PageContainer = ({ children }) => (
	<Container>
		{children}
	</Container>
)

export default PageContainer