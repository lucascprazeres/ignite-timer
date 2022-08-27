import styled from 'styled-components'
import { ButtonProps } from '.'

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme[props.variant]};
  color: ${(props) => props.theme.fonts.button};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme[`${props.variant}Dark`]};
    transition: background-color 0.3s;
  }
`
