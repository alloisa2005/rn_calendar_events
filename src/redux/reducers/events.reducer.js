import { eventsTypes } from "../types/events.types";

// create a reducer for todos
const initialState = {
  events: [],
  selected: null,
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
        selected: null,
      };
    case eventsTypes.SELECT_EVENT:                          
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default eventsReducer;
