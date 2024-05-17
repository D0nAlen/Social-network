import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={classes.profile}>
        <img src={"/IMG/cat3.jpg"} />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
