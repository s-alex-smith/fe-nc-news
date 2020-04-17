import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <article className="articleCard">
      <h3>
        <Link to={`/articles/${article.article_id}`} className="articleLink">
          {article.title}
        </Link>
      </h3>
      <p className="p4">votes: {article.votes}</p>
      <p className="p4">written by: {article.author}</p>
      <p className="p4">comments: {article.comment_count}</p>
    </article>
  );
};

export default ArticleCard;
