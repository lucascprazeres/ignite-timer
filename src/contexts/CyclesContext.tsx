import { createContext, ReactNode, useReducer, useState } from 'react'

export interface CreateCycleData {
  task: string
  minutesAmount: number
}

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interrupedDate?: Date
  finishedDate?: Date
}

interface CyclesContextData {
  cycles: Cycle[]
  activeCycle?: Cycle
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  secondsPassed: number
  setAmountSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
    if (action.type === 'ADD_NEW_CYCLE') {
      return [...state, action.payload.newCycle]
    }

    return state
  }, [])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsPassed, setSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setAmountSecondsPassed(seconds: number) {
    setSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: {
        activeCycleId
      }
    })

    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, finishedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )
  }

  function createNewCycle({ task, minutesAmount }: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle
      }
    })

    // setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId
      }
    })

    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return {
    //         ...cycle,
    //         interrupedDate: new Date(),
    //       }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )
    setActiveCycleId(null)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        secondsPassed,
        setAmountSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
