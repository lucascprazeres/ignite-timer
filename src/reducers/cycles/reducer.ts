import { produce } from 'immer'
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
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.MarkCurrentCycleAsFinished: {
      const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId)

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, draft => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }
    case ActionTypes.InterruptCurrentCycle: {
      const currentCycleIndex = state.cycles.findIndex(cycle => cycle.id === state.activeCycleId)

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, draft => {
        draft.cycles[currentCycleIndex].interrupedDate = new Date()
        draft.activeCycleId = null
      })
    }
    default:
      return state
  }
}
