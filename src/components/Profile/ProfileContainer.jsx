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

// let GetParamsUser = () => {
//   let { userId } = useParams();
//   return userId;
// };

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfileActionCreator })(ProfileContainer);
