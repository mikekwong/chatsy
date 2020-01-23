import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "../Containers/ChatWindow";

const Main = ({ user, activeUserID }) => {
  const renderMainContent = () => {
    if (!activeUserID) {
      return <Empty user={user} activeUserID={activeUserID} />;
    } else {
      return <ChatWindow activeUserID={activeUserID} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};
export default Main;
