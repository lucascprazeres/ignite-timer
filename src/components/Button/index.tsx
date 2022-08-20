import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}
