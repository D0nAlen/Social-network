import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm.jsx";


const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} picture={post.picture} />);
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
