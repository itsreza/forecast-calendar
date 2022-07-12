import { ADD_NEW_EVENT } from "../constants/eventConstants";

export const addNewEventRequested = (payload) => ({
  type: ADD_NEW_EVENT,
  payload,
});
