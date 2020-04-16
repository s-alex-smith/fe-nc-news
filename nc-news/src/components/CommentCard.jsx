import React from "react";
import Voter from "./Voter";
import Deleter from "./Deleter";

const CommentCard = ({ comment, username, removeComment }) => {
  return (
    <article className="articleCard">
      <li>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <Deleter
          comment_id={comment.comment_id}
          author={comment.author}
          username={username}
          removeComment={removeComment}
        />
        <Voter votes={comment.votes} id={comment.comment_id} type="comments" />
      </li>
    </article>
  );
};

export default CommentCard;
