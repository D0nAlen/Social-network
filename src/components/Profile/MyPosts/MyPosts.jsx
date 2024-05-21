import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let posts = [
    {
      id: 1,
      message: "Hello Kitty!!!",
      likesCount: 72,
      picture: "/IMG/cat1.jpg",
    },
    {
      id: 2,
      message: "Have a nice day!",
      likesCount: 81,
      picture: "/IMG/cat2.jpg",
    },
    { id: 3, message: "He-he!", likesCount: 44, picture: "/IMG/cat4.png" },
    {
      id: 4,
      message: "Good evening!",
      likesCount: 31,
      picture: "/IMG/cat7.jpg",
    },
  ];

  let postsElements = posts.map((post) => (
    <Post
      picture={post.picture}
      message={post.message}
      likes={post.likesCount}
    />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
