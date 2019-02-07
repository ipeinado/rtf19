import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

import FluidContainer from './fluidcontainer'

const HeaderContainer = styled.header`
  background: #fff;
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
  border-bottom: 1px solid #d9d9d9;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, .97);
  z-index: 9999;
`
const NavBar = styled.div`
  margin: 0 auto;
  padding: 0 1rem; 
  position: relative;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 992px) {
    width: 950px;
    padding-left: 0;
    padding-right: 0; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const NavbarHeader = styled.div`
  margin-right: 0;
  margin-left: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: -1px;
`

const NavTitle = styled(Link)`
  color: #000;
  font-size: 28px;
  font-weight: 800;
  text-decoration: none;
`

const ToggleButton = styled.button`
  position: relative;
  float: right;
  padding: 7px 10px;
  background-color: transparent;
  border-radius: 4px;
  border-color: #ddd;
  cursor: pointer;

  span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    background-color: #888;
    margin: 4px 0;
  }

  &:hover,
  &:focus {
    background-color: #ddd;
  }

  @media (min-width: 992px) {
    display: none;
  }
`

const Nav = styled.nav`
  
`

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 340px;
  overflow-y: auto;
  display: none;
  
  &.expanded {
    display: block;
  }

  @media (min-width: 992px) {
    display: block;
  }  
`

const MenuItem = styled.li`
  display: block;
  margin-bottom: 0;

  &.btn {
    background-color: #F5BE38;

    &:hover {
      background-color: #FFDC76;
    }
  }

  a {
    display: block;
    font-size: .85rem;
    color: #333;
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
    text-decoration: none;
    border-bottom: 1px solid #eee;
    font-family: 'Open Sans', sans-serif;
    
  }

  @media (min-width: 992px) {
    display: inline-block;

    a {
      border-bottom: 5px solid transparent;  
    }
    a:hover,
    a:focus,
    a.active {
      border-color: #F5BE38;
    }
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 1024,
      expanded: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth
    })
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleToggle() {
    const state = this.state.expanded
    const navMenu = document.getElementById('navbar-collapse')

    if (state) {
      navMenu.focus()
    }

    this.setState({ expanded: !state })
  }

  handleWindowSizeChange() {
    this.setState({
      width: window.innerWidth
    })
  }


  render() {
    return (
      <HeaderContainer>
        <FluidContainer>
          <NavBar>
            <NavbarHeader className="navbar-header">
              <NavTitle 
                to="/"
                title="Raising the Floor home"
              >
                { this.props.siteTitle }
              </NavTitle>

              <ToggleButton 
                onClick={ this.handleToggle }
                role="button"
                aria-controls="navbar-collapse"
                aria-expanded={ this.state.expanded }
                aria-label={ this.state.expanded ? 'Click to close menu' : 'Click to open menu' }
              >
                <span></span>
                <span></span>
                <span></span>
              </ToggleButton>
            </NavbarHeader>

            <div 
              id="navbar-collapse" 
              aria-hidden={ (this.state.width < 992 && !this.state.expanded) ? 'true' : 'false'} >
              <Nav 
                role="navigation"
                aria-labelledby="main-menu-title"
              >
                <h2 className="sr-only" id="main-menu-title">Main navigation</h2>
                <Menu className={ this.state.expanded ? 'navigation-menu expanded' : 'navigation-menu' }>
                  <MenuItem><Link to="/" activeClassName="active" title="Go to Raising The Floor homepage">Home</Link></MenuItem>
                  <MenuItem><Link to="/who-we-are" activeClassName="active" title="Learn who we are">Who we are</Link></MenuItem>
                  <MenuItem><Link to="/what-we-do" activeClassName="active" title="Discover our projects">What we do</Link></MenuItem>
                  <MenuItem className="btn"><Link to="/get-involved" activeClassName="active" title="Participate">Get involved</Link></MenuItem>
                </Menu>
              </Nav>
            </div>
          </NavBar>
        </FluidContainer>
      </HeaderContainer>
    )
  }
}

export default Header
