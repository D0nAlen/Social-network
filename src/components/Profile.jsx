import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src={"/IMG/cat3.jpg"} />
      </div>

      <div>avatar + description</div>

      <div>
        My posts
        <div>New post</div>
        <div className={classes.posts}>
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
