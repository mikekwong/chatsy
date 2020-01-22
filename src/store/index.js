import { createStore } from "redux";
import reducer from "../reducers";

import { contacts } from "../static-data";

// Contacts is initial state of the store
const store = createStore(reducer, { contacts });

export default store;
