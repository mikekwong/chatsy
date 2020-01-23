import user from "./users";
import contacts from "./contacts";
import messages from "./messages";
import activeUserID from "./activeUserID";

import { combineReducers } from "redux";

export default combineReducers({
  user,
  messages,
  contacts,
  activeUserID
});
