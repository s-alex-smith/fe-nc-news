import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils";
import { Link } from "@reach/router";
import Voter from "./Voter";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchSingleArticle();
  };

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="mainBody">
        <div className="fullArticle">
          <h3>{article.title}</h3>
          <p className="p1">written by: {article.author}</p>
          <p className="p2">{article.body}</p>
          <div className="votesBox">
            <Voter
              votes={article.votes}
              id={article.article_id}
              type="articles"
            />
          </div>
          <h4>
            <Link to={`/articles/${article.article_id}/comments`}>
              See comments for {article.title}
            </Link>
          </h4>
        </div>
      </main>
    );
  }

  fetchSingleArticle = () => {
    const { article_id } = this.props;
    api.getSingleArticle({ article_id }).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };
}

export default SingleArticle;
