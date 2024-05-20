import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hello Kitty!!!", likesCount: 72, picture:"/IMG/cat1.jpg"  },
    { id: 2, message: "Have a nice day!", likesCount: 81, picture:"/IMG/cat2.jpg" },
    { id: 3, message: "He-he!", likesCount: 44, picture:"/IMG/cat4.png" },
    { id: 4, message: "Good evening!", likesCount: 31 , picture:"/IMG/cat7.jpg"},
  ];

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
      <div className={classes.posts}>
        <Post picture={postsData[0].picture} message={postsData[0].message} likes={postsData[0].likesCount} />
        <Post picture={postsData[1].picture} message={postsData[1].message} likes={postsData[1].likesCount} />
        <Post picture={postsData[2].picture} message={postsData[2].message} likes={postsData[2].likesCount} />
        <Post picture={postsData[3].picture} message={postsData[3].message} likes={postsData[3].likesCount} />

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
