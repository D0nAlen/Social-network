// import styles from "../Users/Users.module.css";
// import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator.jsx";
import User from "./User.jsx";

// let userPhoto = "/IMG/cat9.jpg";

let Users = (props) => {
  return (
    <div>
      <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />

      {props.users.map((user) => (
        <User user={user} key={user.id} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} />
        // <div key={user.id}>
        //   <span>
        //     <div>
        //       <NavLink to={"/profile/" + user.id}>
        //         <img src={user.photos.large != null ? user.photos.large : userPhoto} className={styles.userPhoto} />
        //       </NavLink>
        //     </div>
        //     <div>
        //       {user.followed ? (
        //         <button
        //           disabled={props.followingInProgress.some((id) => id === user.id)}
        //           onClick={() => {
        //             props.unfollow(user.id);
        //           }}
        //         >
        //           Unfollow
        //         </button>
        //       ) : (
        //         <button
        //           disabled={props.followingInProgress.some((id) => id === user.id)}
        //           onClick={() => {
        //             props.follow(user.id);
        //           }}
        //         >
        //           Follow
        //         </button>
        //       )}
        //     </div>
        //   </span>
        //   <span>
        //     <span>
        //       <div>{user.name}</div>
        //       <div>{user.status}</div>
        //     </span>
        //     <span>
        //       <div>{"user.location.country"}</div>
        //       <div>{"user.location.city"}</div>
        //     </span>
        //   </span>
        // </div>
      ))}
    </div>
  );
};

export default Users;
