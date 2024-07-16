import React, { useEffect, useParams } from "react";
import Profile from "./Profile.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfileActionCreator } from "../../redux/profileReducer.js";

const ProfileContainer = () => {

  useEffect(() => {
    let userId = GetParamsUser();
    if (!userId) userId = 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
      this.props.setUserProfileActionCreator(response.data);
    });

    return <Profile {...this.props} profile={this.props.profile} />;
  });
};

// const ProfileContainer = () => {
//   componentDidMount() {
//     let userId = GetParamsUser();
//     if (!userId) userId = 2;
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
//       this.props.setUserProfileActionCreator(response.data);
//     });
//   };

//   render() {
//     return <Profile {...this.props} profile={this.props.profile} />;
//   };
// };

let GetParamsUser = () => {
  let { userId } = useParams();
  return userId;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfileActionCreator })(ProfileContainer);
