import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader.js";

const ProfileInfo = (props) => {
  if (!props.profile) {
    <Preloader />;
  }
  return (
    <div>
      <div className={classes.profile}>
        <img src={"/IMG/cat3.jpg"} />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} />
        avatar + description
      </div>
    </div>
  );
};

export default ProfileInfo;
