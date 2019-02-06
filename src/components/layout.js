import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import SubscribeForm from './subscribeform'
import './layout.css'

import styled from 'styled-components'

const Footer = styled.footer`
  background-color: #33322F;
  display: block;
  color: #fff;
  padding: 4rem 0;
  overflow: hidden;  
`

const Container = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    width: 950px;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          <Footer>
            <Container>
              <div className="logo-footer">
              <p>Raising The Floor</p>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>

              <div className="submit-form">
                <p>Sign up to receive updates from Raising The Floor</p>
                <SubscribeForm />
              </div>
            </Container>
          </Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
