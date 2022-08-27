import { HandPalm, Play } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { useForm } from 'react-hook-form'
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

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interrupedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsPassed, setSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>()

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let cycleInterval: number

    if (activeCycle) {
      cycleInterval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return {
                  ...cycle,
                  finishedDate: new Date(),
                }
              } else {
                return cycle
              }
            }),
          )

          clearInterval(cycleInterval)
          setSecondsPassed(totalSeconds)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(cycleInterval)
      setSecondsPassed(0)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle({ task, minutesAmount }: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interrupedDate: new Date(),
          }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <Form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <InputGroup>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <div>
            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
              id="minutesAmount"
              type="number"
              placeholder="00"
              max={60}
              min={5}
              step={5}
              disabled={!!activeCycle}
              {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
          </div>
        </InputGroup>

        <CountdownContainer>
          <Number>{minutes[0]}</Number>
          <Number>{minutes[1]}</Number>
          <Separator>:</Separator>
          <Number>{seconds[0]}</Number>
          <Number>{seconds[1]}</Number>
        </CountdownContainer>

        {activeCycle ? (
          <Button type="button" variant="danger" onClick={handleInterruptCycle}>
            <HandPalm size={24} /> Encerrar
          </Button>
        ) : (
          <Button type="submit" disabled={isSubmitDisabled} variant="primary">
            <Play size={24} /> Começar
          </Button>
        )}
      </Form>
    </HomeContainer>
  )
}
