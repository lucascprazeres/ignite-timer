import styled from 'styled-components'
import { breakpoints } from '../../../../styles/breakpoints'

export const NewCycleFormContainer = styled.fieldset`
  border: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.fonts.primary};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media ${breakpoints.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.border};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.fonts.primary};

  &:focus {
    border-bottom-color: ${(props) => props.theme.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.border};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
