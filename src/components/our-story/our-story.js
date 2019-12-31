import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
//import Fade from 'react-reveal/Fade'

import Heading from '../heading/heading'
import Background from '../background/backgroud'
import { InnerWrapper, Paragraph } from './our-story.styles'

const OurStory = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "salon.jpg" }) {
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
    `linear-gradient(rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.8))`,
  ].reverse()
  return (
    <Background image={data.background.childImageSharp.fluid}>
      <InnerWrapper>
        <Heading
          h2
          center
          noMarginTop
          css={`
            color: ${({ theme }) => theme.colors.greyLight1};
            margin-bottom: 2rem;
          `}
        >
          Our Story
        </Heading>

        <Paragraph>
          Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nulla
          aliquet porttitor lacus luctus accumsan tortor. Risus at ultrices mi
          tempus imperdiet nulla malesuada pellentesque. Pellentesque dignissim
          enim sit amet venenatis. Venenatis urna cursus eget nunc scelerisque
          viverra. Ultrices eros in cursus turpis massa tincidunt dui ut.
          Ultricies mi quis hendrerit dolor magna eget est lorem. Aliquam
          vestibulum morbi blandit cursus risus at ultrices mi. Nunc vel risus.
        </Paragraph>
      </InnerWrapper>
    </Background>
  )
}

export default OurStory
