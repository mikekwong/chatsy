import { SET_ACTIVE_USER_ID, DELETE_CONTACT } from "./constants/action-types";

// take an ID of user and return the action (object with type and payload)
export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

// the Delete Chat Action
export const deleteContact = user_id => ({
  type: DELETE_CONTACT,
  payload: user_id
});
