import { Play } from 'phosphor-react'
import { Button } from '../../components/Button'
import {
  CountdownContainer,
  Form,
  HomeContainer,
  InputGroup,
  MinutesAmountInput,
  Number,
  Separator,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Form action="">
        <InputGroup>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            max={60}
            min={5}
            step={5}
          />

          <span>minutos.</span>
        </InputGroup>

        <CountdownContainer>
          <Number>0</Number>
          <Number>0</Number>
          <Separator>:</Separator>
          <Number>0</Number>
          <Number>0</Number>
        </CountdownContainer>

        <Button type="submit">
          <Play size={24} /> Começar
        </Button>
      </Form>
    </HomeContainer>
  )
}
