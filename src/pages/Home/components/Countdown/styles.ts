import styled from 'styled-components'
import { breakpoints } from '../../../../styles/breakpoints'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', sans-serif;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.fonts.primary};

  display: flex;
  gap: 1rem;

  @media ${breakpoints.mobile} {
    font-size: 4rem;
    line-height: 4rem;
    gap: 0.5rem;
  }
`

export const Number = styled.span`
  background: ${(props) => props.theme.bodyLight};
  padding: 2rem 1rem;
  border-radius: 8px;

  @media ${breakpoints.mobile} {
    padding: 1rem 0.5rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.primary};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media ${breakpoints.mobile} {
    padding: 0;
    width: 1.5rem;
  }
`
