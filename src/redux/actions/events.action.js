
// create actions for events
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';

// create action creators
export const addEvent = (event) => {
  return {
    type: ADD_EVENT,
    payload: event
  }
}

export const deleteEvent = (id) => {
  return {
    type: DELETE_EVENT,
    payload: id
  }
}

export const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event
  }
}
