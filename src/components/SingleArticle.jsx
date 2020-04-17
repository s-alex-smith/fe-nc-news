import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils";
import { Link } from "@reach/router";
import Voter from "./Voter";
import ErrorDisplay from "./ErrorDisplay";
import "../styles/global.css";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    articleError: null,
  };

  componentDidMount = () => {
    this.fetchSingleArticle();
  };

  render() {
    const { article, isLoading, articleError } = this.state;
    if (isLoading) return <Loader />;
    if (articleError)
      return (
        <ErrorDisplay status={articleError.status} msg={articleError.msg} />
      );
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
            <Link
              to={`/articles/${article.article_id}/comments`}
              className="btn btn-4"
            >
              See comments
            </Link>
          </h4>
        </div>
      </main>
    );
  }

  fetchSingleArticle = () => {
    const { article_id } = this.props;
    api
      .getSingleArticle({ article_id })
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          articleError: {
            status: err.response.status,
            msg: err.response.data.message,
          },
          isLoading: false,
        });
      });
  };
}

export default SingleArticle;
