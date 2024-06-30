import React from "react";
import Users from "./Users.jsx";
import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../redux/usersReducer.js";

let mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
