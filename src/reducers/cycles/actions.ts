import { Cycle } from "./reducer";

export enum ActionTypes {
  AddNewCycle = 'ADD_NEW_CYCLE',
  InterruptCurrentCycle = 'INTERRUPT_CURRENT_CYCLE',
  MarkCurrentCycleAsFinished = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.AddNewCycle,
    payload: {
      newCycle
    }
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.InterruptCurrentCycle,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MarkCurrentCycleAsFinished,
  }
}
