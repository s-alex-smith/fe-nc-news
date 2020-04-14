import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="mainBody">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles({ topic }).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticleList;
