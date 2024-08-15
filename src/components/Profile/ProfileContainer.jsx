import React, { useEffect } from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProfileContainer = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    if (userId) {
      props.getUserProfile(userId);
    }
  }, [userId]);


  if (!props.isAuth) {
    return <Navigate replace to="/login" />;
  }
  return <Profile profile={props.profile} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
