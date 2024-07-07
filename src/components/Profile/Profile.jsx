import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
