import { ADD_NEW_EVENT } from "../constants/eventConstants";

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
    default:
      break;
  }
  return newState;
};
export default eventReducer;
