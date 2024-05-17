import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src={"/IMG/cat1.jpg"} />
      {props.message}
      <div>
        <span> {props.likes} like</span>
      </div>
    </div>
  );
};

export default Post;
