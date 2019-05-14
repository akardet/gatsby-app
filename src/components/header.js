import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Nav from "../components/nav"

const HomeLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline;
`

const Header = ({ siteTitle }) => (
  <header>
    <div style={{ margin: "2rem" }}>
      <h1>
        <HomeLink to="/">
          {siteTitle} <span role="img">🌱</span>
        </HomeLink>
      </h1>
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
