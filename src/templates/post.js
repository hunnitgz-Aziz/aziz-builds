import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Post = styled.div``

const HeadlineImage = styled.img``

const PostTitle = styled.h2`
  max-width: 1024px;
  margin: 1.5rem auto;
`

const PostContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const Button = styled(props => <Link {...props} />)`
  box-shadow: none;
  width: 100%;
  display: block;
  text-align: center;
  border: 3px solid #fff;
  margin: 2rem auto;
  padding: 1rem;

  &:hover {
    box-shadow: none;
    background: #fff;
    color: #008080;
  }
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Post>
        <HeadlineImage
          alt={post.frontmatter.title}
          src={post.frontmatter.image.childImageSharp.fluid.originalImg}
        />
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
      <Button to="/">See All Projects</Button>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
`
