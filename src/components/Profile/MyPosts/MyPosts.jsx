import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import { useForm } from "react-hook-form";
import { Textarea } from "../../common/FormsControlls/FormsControlls.js";

const AddNewPostForm = (props) => {
  const { register, handleSubmit, formState } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <Textarea register={register} formState={formState} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

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
