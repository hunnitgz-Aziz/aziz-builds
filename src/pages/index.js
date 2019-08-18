import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Post = styled.div`
  /* display: inline-block;
  width: 45%;
  margin: 0 0.5rem; */
  position: relative;
  border-top: 8px solid #d3d3d3;
  transition: all 200ms cubic-bezier(0.01, 0.5, 0.465, 0.81);

  @media (max-width: 640px) {
    margin-bottom: 2rem;
    width: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: -1rem;
    left: 0;
    background: #d3d3d3;
    height: 1rem;
    width: 4rem;
    display: block;
    z-index: 1;
  }

  &:hover {
    transform: translate(-10px, -10px);
  }
`

const PostLink = styled(props => <Link {...props} />)`
  box-shadow: none;
  display: block;
  position: relative;
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 100%;

  &:hover {
    -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 92, 92, 1);
    -moz-box-shadow: 10px 10px 0px 0px rgba(0, 92, 92, 1);
    box-shadow: 10px 10px 0px 0px rgba(0, 92, 92, 1);
  }
`
const PostImage = styled.img`
  margin-bottom: 0;
`

const PostTitle = styled.h3`
  color: #333;

  @media (max-width: 641px) {
    font-size: 1.25em;
  }
`

const Overlay = styled.div`
  background-color: #d3d3d3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 0 0.2rem;
  opacity: 0;
  transition: all 200ms cubic-bezier(0.01, 0.5, 0.465, 0.81);

  ${PostLink}:hover & {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px 10px;

  @media (min-width: 641px) {
    grid-gap: 30px 10px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      {data.allMarkdownRemark.edges.map(post => (
        <Post>
          <PostLink key={post.node.id} to={post.node.frontmatter.path}>
            <PostImage
              src={
                post.node.frontmatter.image.childImageSharp.fluid.originalImg
              }
            />
            <Overlay>
              <PostTitle>{post.node.frontmatter.title}</PostTitle>
            </Overlay>
          </PostLink>
        </Post>
      ))}
    </Wrapper>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            image {
              id
              childImageSharp {
                fluid(maxWidth: 1200) {
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
