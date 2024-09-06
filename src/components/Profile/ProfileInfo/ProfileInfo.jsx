import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader.js";
// import ProfileStatus from "./ProfileStatus.jsx";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large ? props.profile.photos.large : "/IMG/cat3.jpg"} className={classes.profilePhoto} />
        <p>{props.profile.fullName}</p>

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
