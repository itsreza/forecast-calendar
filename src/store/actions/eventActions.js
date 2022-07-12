import { ADD_NEW_EVENT, REMOVE_EVENT } from "../constants/eventConstants";

export const addNewEventRequested = (payload) => ({
  type: ADD_NEW_EVENT,
  payload,
});

export const removeEventRequested = (payload) => ({
  type: REMOVE_EVENT,
  payload,
});
