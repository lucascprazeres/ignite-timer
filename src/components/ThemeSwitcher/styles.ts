import styled from 'styled-components'

export const ThemeSwitcherContainer = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  color: ${(props) => props.theme.fonts.primary};
`
