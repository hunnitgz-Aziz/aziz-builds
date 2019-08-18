import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: #d3d3d3;
`

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-flow: row wrap;
    align-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
  }
`

const LinkContainer = styled.div`
  @media (max-width: 480px) {
    flex: 0 1 50%;
  }
`

const CopyrightContainer = styled.div`
  color: #222;
  @media (max-width: 480px) {
    flex: 0 1 50%;
    text-align: right;
  }
`

const LinkList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const LinkListItem = styled.li`
  display: inline-block;
  margin: 0;

  @media (max-width: 480px) {
    display: block;
  }
`

const Link = styled.a`
  color: #222;
  text-decoration: none;
  padding-right: 0.75rem;
  font-size: 22px;
  box-shadow: none;
`

const Footer = () => (
  <FooterContainer>
    <Wrapper>
      <LinkContainer>
        <LinkList>
          <LinkListItem>
            <Link href="mailto:azizramos00@gmail.com">Email</Link>
          </LinkListItem>
          <LinkListItem>
            <Link href="https://dribbble.com/azizramos" target="_blank">
              Dribbble
            </Link>
          </LinkListItem>
          <LinkListItem>
            <Link href="https://twitter.com/_azizramos" target="_blank">
              Twitter
            </Link>
          </LinkListItem>
          <LinkListItem>
            <Link
              href="https://www.linkedin.com/in/aziz-ramos/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </LinkListItem>
        </LinkList>
      </LinkContainer>
      <CopyrightContainer>© {new Date().getFullYear()}</CopyrightContainer>
    </Wrapper>
  </FooterContainer>
)

export default Footer
