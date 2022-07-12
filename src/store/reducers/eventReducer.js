import { ADD_NEW_EVENT, REMOVE_EVENT } from "../constants/eventConstants";

const initState = {
  eventsList: [],
};

const eventReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case ADD_NEW_EVENT:
      newState = {
        ...state,
        eventsList: [...state.eventsList, action.payload],
      };
      break;
    case REMOVE_EVENT:
      newState = {
        ...state,
        eventsList: [
          ...state.eventsList?.filter((event) => event.key !== action.payload),
        ],
      };
    default:
      break;
  }
  return newState;
};
export default eventReducer;
