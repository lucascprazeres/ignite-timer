import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm/'
import { Form, HomeContainer } from './styles'

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

export function Home() {
  const newCycleForm = useForm<NewCycleFormData>()
  const { handleSubmit, watch /* reset */ } = newCycleForm

  const { createNewCycle, activeCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <Form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <Button
            type="button"
            variant="danger"
            onClick={interruptCurrentCycle}
          >
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
