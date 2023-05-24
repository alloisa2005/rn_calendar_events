
import { eventsTypes } from "../types/events.types"

export const addEvent = (event) => {
  return {
    type: eventsTypes.ADD_EVENT,
    payload: event
  }
}

export const deleteEvent = (id) => {
  return {
    type: eventsTypes.DELETE_EVENT,
    payload: id
  }
}

export const updateEvent = (event) => {
  return {
    type: eventsTypes.UPDATE_EVENT,
    payload: event
  }
}

export const selectEvent = (event) => {
  return {
    type: eventsTypes.SELECT_EVENT,
    payload: event
  }
}
