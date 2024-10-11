import styles from "../Users/Users.module.css";
import { NavLink } from "react-router-dom";

let userPhoto = "/IMG/cat9.jpg";

let User = (props) => {
  return (
    <div>
      <div key={props.user.id}>
        <span>
          <div>
            <NavLink to={"/profile/" + props.user.id}>
              <img src={props.user.photos.large != null ? props.user.photos.large : userPhoto} className={styles.userPhoto} />
            </NavLink>
          </div>
          <div>
            {props.user.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === props.user.id)}
                onClick={() => {
                  props.unfollow(props.user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === props.user.id)}
                onClick={() => {
                  props.follow(props.user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span>
          <span>
            <div>{props.user.name}</div>
            <div>{props.user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
      </div>
    </div>
  );
};

export default User;
