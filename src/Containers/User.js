import React from "react";
import "./User.css";
import store from "../store";
import { setActiveUserId } from "../actions";
import { deleteContact } from "../actions";

const User = ({ user }) => {
  const { name, profile_pic, status } = user;
  return (
    <div className="User" onClick={() => handleUserClick(user)}>
      <p
        className="User__closeIcon"
        onClick={e => handleCrossClick(e, user.user_id)}
      >
        {" "}
        X{" "}
      </p>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

// destructure user_id from passed in user object
function handleUserClick({ user_id }) {
  store.dispatch(setActiveUserId(user_id));
}

function handleCrossClick(e, user_id) {
  e.stopPropagation();
  store.dispatch(setActiveUserId(null));
  store.dispatch(deleteContact(user_id));
}

export default User;
