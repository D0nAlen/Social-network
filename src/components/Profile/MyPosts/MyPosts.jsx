import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let postsElements = props.posts.posts.map((post) => (
    <Post
      id={post.id}
      message={post.message}
      likesCount={post.likesCount}
      picture={post.picture}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    props.addPost();
    // props.updateNewPostText("");
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
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
