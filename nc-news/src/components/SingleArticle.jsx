import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils";

class SingleArticle extends Component {
  state = {
    article: {
      article_id: 1,
      title: "Running a Node App",
      body:
        "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
      votes: 0,
      topic: "coding",
      author: "jessjelly",
      created_at: "2016-08-18T12:07:52.389Z",
      comment_count: "8",
    },
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
        <h3>{article.title}</h3>
        <p>written by: {article.author}</p>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
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
