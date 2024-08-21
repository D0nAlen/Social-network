import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import { useForm } from "react-hook-form";
import { Textarea } from "../../common/FormsControlls/FormsControlls.js";
import { maxLengthCreator, requiredField } from "../../../utils/validators/index.js";

const maxLength10 = maxLengthCreator(10);
// const required = requiredField;
const AddNewPostForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors  },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        {/* <textarea {...register("newPostText", { required: true, maxLength: 20 })}/> */}
        {/* <Textarea {...register("newPostText", { validate: validatorFunction })} /> */}

        <Textarea {...register("newPostText")} />
        {/* {isDirty.newPostText && <span>Поле отредактировано!</span>} */}
        {/* {errors?.newPostText && <span>{errors?.newPostText?.message}</span>} */}
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} picture={post.picture} />);
  // let newPostElement = React.createRef();
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
