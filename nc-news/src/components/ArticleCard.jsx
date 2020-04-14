import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <h3>
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </h3>
      <p>votes: {article.votes}</p>
      <p>author: {article.author}</p>
      <p>comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticleCard;
