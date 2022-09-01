import { ActionTypes } from "./actions"

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interrupedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
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
}
