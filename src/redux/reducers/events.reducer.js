import { eventsTypes } from "../types/events.types";

// create a reducer for todos
const initialState = {
  events: [
    { id: 1, title: "Ir al Cine", completed: false },
    { id: 2, title: "Hacer compras", completed: false },
  ],
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventsTypes.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case eventsTypes.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case eventsTypes.UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    default:
      return state;
  }
};

export default eventsReducer;
