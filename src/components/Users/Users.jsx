import React from "react";
import styles from "./Users.module.css";
import axios from "axios";

let userPhoto = "/IMG/cat9.jpg";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
        this.props.setUsers(response.data.items);
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get users</button>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img src={user.photos.large != null ? user.photos.large : userPhoto} className={styles.userPhoto} />
              </div>
              <div>
                {user.followed ? (
                  <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>Follow</button>
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
  }
}

// let Users = (props) => {
//   if (props.users.length === 0) {
//     axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
//       props.setUsers(response.data.items);
//     });

//     // props.setUsers([
//     //   {
//     //     id: 1,
//     //     photoURL: "/IMG/cat13.jpg",
//     //     followed: true,
//     //     fullName: "John Dorian",
//     //     status: "ordinator",
//     //     location: { city: "Los Angeles", country: "USA" },
//     //   },
//     //   {
//     //     id: 2,
//     //     photoURL: "/IMG/cat12.jpg",
//     //     followed: true,
//     //     fullName: "Perry Cox",
//     //     status: "doctor",
//     //     location: { city: "Los Angeles", country: "USA" },
//     //   },
//     //   {
//     //     id: 3,
//     //     photoURL: "/IMG/cat10.jpg",
//     //     followed: true,
//     //     fullName: "Christopher Turk",
//     //     status: "ordinator",
//     //     location: { city: "Los Angeles", country: "USA" },
//     //   },
//     //   {
//     //     id: 4,
//     //     photoURL: "/IMG/cat11.jpg",
//     //     followed: false,
//     //     fullName: "Elliot Reid",
//     //     status: "ordinator",
//     //     location: { city: "Los Angeles", country: "USA" },
//     //   },
//     // ]);
//   }
// }

export default Users;
