import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
// import { addPostActionCreator,updateNewPostTextActionCreator } from "../../../redux/profileReducer.js";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post
      id={post.id}
      message={post.message}
      likesCount={post.likesCount}
      picture={post.picture}
    />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
