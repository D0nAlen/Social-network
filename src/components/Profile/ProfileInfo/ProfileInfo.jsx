import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.profile}>
        <img src={"/IMG/cat3.jpg"} />
      </div>
      <div className={classes.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
