import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => {
  // const state = {
  //   user: [],
  //   messages: {
  //     user_id: {
  //       0: { text, is_user_msg },
  //       1: { text, is_user_msg }
  //     },
  //     user_id_2: {
  //       0: { text, is_user_msg }
  //     }
  //   },

  //   contacts: {
  //     user_id: {
  //       name,
  //       email,
  //       profile_pic,
  //       status,
  //       user_id
  //     },
  //     user_id_2: {
  //       name,
  //       email,
  //       profile_pic,
  //       status,
  //       user_id_2
  //     }
  //   }
  // }
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};
export default App;
