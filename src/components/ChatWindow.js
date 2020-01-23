import React from "react";
const ChatWindow = ({ activeUserID }) => {
  return (
    <div className="ChatWindow">
      Conversation for user id:
      {activeUserID}
    </div>
  );
};
export default ChatWindow;
