import React from "react";
import User from "../Containers/User";
import "./Sidebar.css";
import _ from "lodash";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {_.values(contacts[0]).map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};
export default Sidebar;
