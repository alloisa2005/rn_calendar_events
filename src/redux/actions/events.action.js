
import { eventsTypes } from "../types/events.types"
import { FIREBASE_API_URL } from "../../constants/firebase"
import axios from "axios";

export const addEvent = (event) => {
  return {
    type: eventsTypes.ADD_EVENT,
    payload: event
  }
}

/* axios.get(`${FIREBASE_API_URL}/events.json`).then((response) => {
  console.log(response.data)
}).catch((error) => {
  console.log(error)
}) */

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
