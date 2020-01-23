import { SET_ACTIVE_USER_ID } from "./constants/action-types";

// take an ID of user and return the action (object with type and payload)
export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});
