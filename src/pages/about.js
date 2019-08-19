import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import styled from "styled-components"

import Aziz from "../images/aziz-builds-about.jpg"

const Wrapper = styled.div`
  @media (min-width: 641px) {
    display: flex;
  }
`

const TextContainer = styled.div`
  @media (min-width: 641px) {
    flex: 0 1 50%;
  }
`

const Headline = styled.h4`
  @media (min-width: 641px) {
    flex: 0 1 50%;
  }
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <Headline>Hey there</Headline>
      <TextContainer>
        <p>You've arrived at Aziz's builds. </p>
        <p>
          Aziz Ramos is an artist and designer that enjoys making sculptures,
          designs for film sets and solutions for living spaces.
        </p>
        <p>
          He found interest in woodworking by hacking together a dolly track
          with a sheet of plywood, a pair of PVC pipes, and roller blade wheels
          for{" "}
          <a target="_blank" href="https://www.youtube.com/watch?v=Sc-9sU22-1E">
            a music video.
          </a>{" "}
          He then proceeded to attend a 5 week workshop at{" "}
          <a target="_blank" href="https://www.thediyjoint.com/">
            thediyjoint.
          </a>{" "}
          It looks like there's no stopping him from thinking about solving
          problems around the house by getting handy.
        </p>

        <p>
          No matter what, Aziz always needs something to do so don't hesitate to
          send over that million dollar idea via{" "}
          <a href="mailto:azizramos00@gmail.com">email.</a> Or re-visit his{" "}
          <a href="http://notansari.com">digital design portal.</a>
        </p>
        <img src={Aziz} />
      </TextContainer>
    </Wrapper>
  </Layout>
)

export default About
