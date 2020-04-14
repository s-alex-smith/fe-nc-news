import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentWillMount = () => {
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
            <p>Votes: {article.votes}</p>
          </div>
          <button>See all comments</button>
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
