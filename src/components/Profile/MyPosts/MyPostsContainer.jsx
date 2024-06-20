import React from "react";
import addPostActionCreator from "../../../redux/profileReducer.js";
import updateNewPostTextActionCreator from "../../../redux/profileReducer.js";
import MyPosts from "./MyPosts.jsx";
import StoreContext from "../../../StoreContext.js";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
