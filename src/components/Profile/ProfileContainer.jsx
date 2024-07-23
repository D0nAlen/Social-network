import React, { useEffect } from "react";
import Profile from "./Profile.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfileActionCreator } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";

const ProfileContainer = (props) => {
  let { userId } = useParams();

  useEffect(() => {
    if (userId) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
        props.setUserProfileActionCreator(response.data);
      });
    }
  }, [userId]);

  // return <Profile {...this.props} profile={this.props.profile} />;
  return <Profile profile={props.profile} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfileActionCreator })(ProfileContainer);
