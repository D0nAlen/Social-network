import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/* <div className={classes.item}>
          <img src={"/IMG/cat1.jpg"} />
          post 1
        </div>
        <div className={classes.item}>
          <img src={"/IMG/cat2.jpg"} />
          post 2
        </div>
        <div className={classes.item}>
          <img src={"/IMG/cat4.png"} />
          post 3
        </div>
        <div className={classes.item}>
          <img src={"/IMG/cat7.jpg"} />
          post 4
        </div>
        <div className={classes.item}>
          <img src={"/IMG/cat8.jpg"} />
          post 5
        </div> */}
      </div>
    </div>
  );
};

export default MyPosts;
