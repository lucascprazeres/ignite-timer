import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`

export const InputGroup = styled.fieldset`
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

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', sans-serif;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.fonts.primary};

  display: flex;
  gap: 1rem;
`

export const Number = styled.span`
  background: ${(props) => props.theme.bodyLight};
  padding: 2rem 1rem;
  border-radius: 8px;
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.primary};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
