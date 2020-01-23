import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import _ from "lodash";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserID }) => {
  const state = store.getState();
  const activeUser = state.contacts.contacts[activeUserID];
  const activeMsgs = state.messages[activeUserID];
  console.log("activemsgs", activeMsgs);
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      {/* Convert properties with object fields into array for easier iteration using lodash*/}
      <Chats messages={_.values(activeMsgs)} />
    </div>
  );
};

export default ChatWindow;
