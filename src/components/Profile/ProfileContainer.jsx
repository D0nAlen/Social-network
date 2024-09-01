import React, { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect.js";

const ProfileContainer = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      userId = props.authorizedUserId;
    }
    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [userId]);

  return <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }), withAuthRedirect)(ProfileContainer);
