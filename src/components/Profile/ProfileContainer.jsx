import React, { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";
// import { withAuthRedirect } from "../../hoc/AuthRedirect.js";
import { compose } from "redux";

const ProfileContainer = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    if (userId) {
      props.getUserProfile(userId);
      props.getStatus(userId);
    }
  }, [userId]);

  return <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
  // withAuthRedirect
)(ProfileContainer);
