import React from "react";
import Voter from "./Voter";
import Deleter from "./Deleter";
import "../styles/global.css";

const CommentCard = ({ comment, username, removeComment, deleteError }) => {
  return (
    <li>
      <p>{comment.body}</p>
      <p className="p1">{comment.author}</p>
      <Deleter
        comment_id={comment.comment_id}
        author={comment.author}
        username={username}
        removeComment={removeComment}
        deleteError={deleteError}
        className="delete"
      />
      <div className="commentVotes">
        <Voter votes={comment.votes} id={comment.comment_id} type="comments" />
      </div>
    </li>
  );
};

export default CommentCard;
