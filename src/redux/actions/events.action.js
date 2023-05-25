import { eventsTypes } from "../types/events.types";
import { FIREBASE_API_URL } from "../../constants/firebase";

export const addEvent = (event) => {
  return {
    type: eventsTypes.ADD_EVENT,
    payload: event,
  };
};

export const updateEvent = (event) => {
  return {
    type: eventsTypes.UPDATE_EVENT,
    payload: event,
  };
};

export const deleteEvent = (id) => {
  return {
    type: eventsTypes.DELETE_EVENT,
    payload: id,
  };
};


export const addEventAsync = (event) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_API_URL}/events.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });
      const data = await response.json();      

      dispatch(addEvent({ ...event, id: data.name }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateEventAsync = (event) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${FIREBASE_API_URL}/events/${event.id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }
      );      

      dispatch(updateEvent(event));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteEventAsync = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_API_URL}/events/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(deleteEvent(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const selectEvent = (event) => {
  return {
    type: eventsTypes.SELECT_EVENT,
    payload: event,
  };
};
