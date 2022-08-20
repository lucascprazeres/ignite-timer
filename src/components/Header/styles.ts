import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Navigation = styled.nav`
  display: flex;
  gap: 0.5rem;
`

export const Link = styled(NavLink)`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.fonts.primary};

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.primary};
  }

  &.active {
    color: ${(props) => props.theme.primary};
  }
`
