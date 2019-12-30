import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { FaArrowCircleDown } from 'react-icons/fa'

import { StyledBg, LogoWrapper, StyledLogo, ArrowLink } from './hero.styles'

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

  const imageStack = [
    data.background.childImageSharp.fluid,
    `linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93))`,
  ].reverse()

  return (
    <StyledBg image={data.background.childImageSharp.fluid.src}>
      <LogoWrapper>
        <Fade top>
          <StyledLogo />
        </Fade>
      </LogoWrapper>
      <ArrowLink href="#">
        <FaArrowCircleDown />
      </ArrowLink>
    </StyledBg>
  )
}

export default Hero
