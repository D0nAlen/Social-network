import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0)
    props.setUsers([
      {
        id: 1,
        photoURL: "/IMG/cat13.jpg",
        followed: true,
        fullName: "John Dorian",
        status: "ordinator",
        location: { city: "Los Angeles", country: "USA" },
      },
      {
        id: 2,
        photoURL: "/IMG/cat12.jpg",
        followed: true,
        fullName: "Perry Cox",
        status: "doctor",
        location: { city: "Los Angeles", country: "USA" },
      },
      {
        id: 3,
        photoURL: "/IMG/cat10.jpg",
        followed: true,
        fullName: "Christopher Turk",
        status: "ordinator",
        location: { city: "Los Angeles", country: "USA" },
      },
      {
        id: 4,
        photoURL: "/IMG/cat11.jpg",
        followed: false,
        fullName: "Elliot Reid",
        status: "ordinator",
        location: { city: "Los Angeles", country: "USA" },
      },
    ]);

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoURL} className={styles.userPhoto} />
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
