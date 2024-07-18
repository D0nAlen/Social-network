import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader.js";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.small ? props.profile.photos.small : "/IMG/cat3.jpg"} className={classes.profilePhoto} />
        avatar + description
      </div>
    </div>
  );
};

export default ProfileInfo;
