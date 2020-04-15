import React from "react";
import Voter from "./Voter";

const CommentCard = ({ comment }) => {
  return (
    <div className="commentCard">
      <li>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <Voter votes={comment.votes} id={comment.comment_id} type="comments" />
      </li>
    </div>
  );
};

export default CommentCard;
