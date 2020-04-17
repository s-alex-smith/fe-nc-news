import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils";
import ArticleCard from "./ArticleCard";
import "../styles/global.css";
import ErrorDisplay from "./ErrorDisplay";
import SortArticlesForm from "./SortArticlesForm";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "",
    order: "desc",
    topicError: null,
  };

  componentDidMount = () => {
    this.fetchArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      this.fetchArticles();
    }
  };

  render() {
    const { articles, isLoading, sort_by, order, topicError } = this.state;
    if (isLoading) return <Loader />;
    if (topicError)
      return <ErrorDisplay status={topicError.status} msg={topicError.msg} />;
    return (
      <main className="mainBody">
        <SortArticlesForm
          sort_by={sort_by}
          order={order}
          handleChangeOrder={this.handleChangeOrder}
          handleChangeSortBy={this.handleChangeSortBy}
        />
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }

  handleChangeSortBy = (event) => {
    this.setState({ sort_by: event.target.value });
  };

  handleChangeOrder = (event) => {
    this.setState({ order: event.target.value });
  };

  fetchArticles = () => {
    const { topic } = this.props;
    const { sort_by, order } = this.state;
    api
      .getArticles({ topic, sort_by, order })
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          topicError: {
            status: err.response.status,
            msg: err.response.data.message,
          },
          isLoading: false,
        });
      });
  };
}

export default ArticleList;
