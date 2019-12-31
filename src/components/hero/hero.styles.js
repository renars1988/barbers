import styled, { keyframes } from 'styled-components'

import Logo from '../../images/logo.svg'

const upAndDown = keyframes`
  0% { 
    transform: translateY(0); 
  }
  100% { 
    transform: translateY(-1rem); 
  }
`

export const LogoWrapper = styled.div`
  margin: auto;
`

export const StyledLogo = styled(Logo)`
  height: 30rem;
  width: 30rem;
`
export const ArrowLink = styled.a`
  animation: ${upAndDown} 1s infinite alternate;
  font-size: 2rem;
  margin: 0 auto 3rem auto;
  color: ${({ theme }) => theme.colors.greyLight1};

  ${({ theme }) => theme.media.tablet`
      display: none;
  `}
`
