import React from "react";
import Profile from "./Profile.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfileActionCreator } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = GetParamsUser();
    // let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
      this.props.setUserProfileActionCreator(response.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let GetParamsUser = () => {
  let { userId } = useParams();
  console.log(userId);
  return userId;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfileActionCreator })(ProfileContainer);

// export default connect(mapStateToProps, { setUserProfileActionCreator })(WithURLDataContainerComponent);
