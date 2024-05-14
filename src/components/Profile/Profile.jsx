import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src={"/IMG/cat3.jpg"} />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
