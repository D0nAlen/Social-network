import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  );
};

export default Profile;
