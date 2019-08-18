import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: #d3d3d3;
`

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const Logo = styled.h5`
  margin: 0;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1em;
  }
`

const LogoLink = styled(props => <Link {...props} />)`
  color: #222;
  text-decoration: none;
  box-shadow: none;

  &:hover {
  }
`

const RouteContainer = styled.div`
  @media (max-width: 480px) {
    text-align: right;
  }
`

const RouteList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const RouteListItem = styled.li`
  display: inline-block;
  margin: 0;
`

const RouteLink = styled(props => <Link {...props} />)`
  color: #222;
  text-decoration: none;
  text-transform: lowercase;
  padding-left: 0.75rem;
  box-shadow: none;
  text-align: right;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Wrapper>
      <Logo>
        <LogoLink to="/">{siteTitle}</LogoLink>
      </Logo>
      <RouteContainer>
        <RouteList>
          <RouteListItem>
            <RouteLink to="/">Work</RouteLink>
          </RouteListItem>
          <RouteListItem>
            <RouteLink to="/about">About</RouteLink>
          </RouteListItem>
        </RouteList>
      </RouteContainer>
    </Wrapper>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
