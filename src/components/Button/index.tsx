import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'danger'
}

export function Button(props: ButtonProps) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}
