import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer.js";
import axios from "axios";
import Users from "../Users/Users.jsx";
import Preloader from "../common/Preloader/Preloader.js";
// import { getUsers } from "../../api/api.js";
import { usersAPI } from "../../api/api.js";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountActionCreator(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
