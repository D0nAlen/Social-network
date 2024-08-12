import react from "react";
import styles from "../Users/Users.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api.js";

let userPhoto = "/IMG/cat9.jpg";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  let viewPagesCount = pagesCount;
  if (pagesCount > 20) viewPagesCount = 20;
  for (let i = 1; i <= viewPagesCount; i++) {
    pages.push(i);
  }
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page ? styles.selectedPage : ""}
              onClick={() => {
                props.onPageChanged(page);
              }}
              key={page}
            >
              {page}
            </span>
          );
        })}
      </div>

      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.large != null ? user.photos.large : userPhoto} className={styles.userPhoto} />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);

                    usersAPI.setUnfollow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                      props.toggleFollowingProgress(false, user.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);

                    usersAPI.setFollow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(user.id);
                      }
                      props.toggleFollowingProgress(false, user.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       {pages.map((page) => {
  //         return (
  //           <span
  //             className={props.currentPage === page ? styles.selectedPage : ""}
  //             onClick={() => {
  //               props.onPageChanged(page);
  //             }}
  //           >
  //             {page}
  //           </span>
  //         );
  //       })}
  //     </div>

  //     {props.users.map((user) => (
  //       <div key={user.id}>
  //         <span>
  //           <div>
  //             <NavLink to={"/profile/" + user.id}>
  //               <img src={user.photos.large != null ? user.photos.large : userPhoto} className={styles.userPhoto} />
  //             </NavLink>
  //           </div>
  //           <div>
  //             {user.followed ? (
  //               <button
  //                 disabled={props.followingInProgress.some((id) => id === user.id)}
  //                 onClick={() => {
  //                   props.toggleFollowingProgress(true, user.id);
  //                   axios
  //                     .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
  //                       withCredentials: true,
  //                       headers: {
  //                         "API-KEY": "df4f8f83-6604-4f9f-822b-a64824e63ead",
  //                       },
  //                     })
  //                     .then((response) => {
  //                       if (response.data.resultCode === 0) {
  //                         props.unfollow(user.id);
  //                       }
  //                       props.toggleFollowingProgress(false, user.id);
  //                     });
  //                 }}
  //               >
  //                 Unfollow
  //               </button>
  //             ) : (
  //               <button
  //                 disabled={props.followingInProgress.some((id) => id === user.id)}
  //                 onClick={() => {
  //                   props.toggleFollowingProgress(true, user.id);
  //                   axios
  //                     .post(
  //                       `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
  //                       {},
  //                       {
  //                         withCredentials: true,
  //                         headers: {
  //                           "API-KEY": "df4f8f83-6604-4f9f-822b-a64824e63ead",
  //                         },
  //                       }
  //                     )
  //                     .then((response) => {
  //                       if (response.data.resultCode === 0) {
  //                         props.follow(user.id);
  //                       }
  //                       props.toggleFollowingProgress(false, user.id);
  //                     });
  //                 }}
  //               >
  //                 Follow
  //               </button>
  //             )}
  //           </div>
  //         </span>
  //         <span>
  //           <span>
  //             <div>{user.name}</div>
  //             <div>{user.status}</div>
  //           </span>
  //           <span>
  //             <div>{"user.location.country"}</div>
  //             <div>{"user.location.city"}</div>
  //           </span>
  //         </span>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Users;
