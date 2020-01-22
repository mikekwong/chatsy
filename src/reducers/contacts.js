import { contacts } from "../static-data";

export default (state = { contacts }, action) => {
  switch (action.type) {
    case "":
      return;
    default:
      return state;
  }
};
