import { getMessages } from "../static-data";

export default (state = getMessages(10), action) => {
  switch (action.type) {
    case "":
      return;
    default:
      return state;
  }
};
