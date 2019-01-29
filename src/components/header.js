import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: #fff;
  margin-bottom: 1.45rem;
`
const NavBar = styled.nav`
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <NavBar>
      <Link 
        to="/"
        title="Raising the Floor home"
        style={{
          color: `#000`,
          fontSize: `32px`,
          fontWeight: `800`,
          textDecoration: `none`,
          fontFamily: `Open Sans, sans-serif`,
          letterSpacing: `-2px`,
        }}
      >
        { siteTitle }
      </Link>      
    </NavBar>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
