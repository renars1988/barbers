import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaArrowCircleDown } from 'react-icons/fa'

import Background from '../background/backgroud'
import { LogoWrapper, StyledLogo, ArrowLink } from './hero.styles'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Background image={data.background.childImageSharp.fluid}>
      <LogoWrapper>
        <StyledLogo />
      </LogoWrapper>
      <ArrowLink href="#">
        <FaArrowCircleDown />
      </ArrowLink>
    </Background>
  )
}

export default Hero
