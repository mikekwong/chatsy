import React from "react";
import "./App.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import store from "../store";
import _ from "lodash";

const App = () => {
  const { contacts, user, activeUserID } = store.getState();
  console.log(store.getState());
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserID={activeUserID} />
    </div>
  );
};
export default App;
