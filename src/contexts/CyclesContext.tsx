import { createContext, ReactNode, useReducer, useState } from 'react'
import { ActionTypes } from '../constants/reducers'

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

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer((state: CyclesState, action: any) => {
    switch (action.type) {
      case ActionTypes.AddNewCycle:
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id
        }
      case ActionTypes.MarkCurrentCycleAsFinished:
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
                if (cycle.id === state.activeCycleId) {
                  return {
                    ...cycle,
                    interrupedDate: new Date(),
                  }
                } else {
                  return cycle
                }
              }),
          activeCycleId: null
        }
      case ActionTypes.InterruptCurrentCycle:
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
                if (cycle.id === state.activeCycleId) {
                  return {
                    ...cycle,
                    finishedDate: new Date(),
                  }
                } else {
                  return cycle
                }
              }),
          activeCycleId: null
        }
      default:
        return state
    }
  }, {
    cycles: [],
    activeCycleId: null
  })

  const [secondsPassed, setSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setAmountSecondsPassed(seconds: number) {
    setSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MarkCurrentCycleAsFinished,
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
      type: ActionTypes.AddNewCycle,
      payload: {
        newCycle
      }
    })

    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: ActionTypes.InterruptCurrentCycle,
      payload: {
        activeCycleId
      }
    })
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
