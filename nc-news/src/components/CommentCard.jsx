import React from "react";

const CommentCard = ({ comment }) => {
  console.log(comment);
  return (
    <div className="commentCard">
      <li>
        <p>{comment.body}</p>
        <p>votes: {comment.votes}</p>
        <p>{comment.author}</p>
      </li>
    </div>
  );
};

export default CommentCard;
