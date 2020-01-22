import user from "./users";
import contacts from "./contacts";
import activeUserID from "./activeUserID";

import { combineReducers } from "redux";

export default combineReducers({
  user,
  contacts,
  activeUserID
});
