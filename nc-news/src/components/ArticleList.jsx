import React, { Component } from "react";
import Loader from "./Loader";
import * as api from "../utils";
import ArticleCard from "./ArticleCard";
import "../styles/global.css";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "",
    order: "desc",
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
    const { articles, isLoading, sort_by, order } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="mainBody">
        <form>
          <label>
            Sort articles by:
            <select sort_by={sort_by} onChange={this.handleChangeSortBy}>
              <option sort_by="created_at">created_at</option>
              <option sort_by="votes">votes</option>
              <option sort_by="comment_count">comment_count</option>
            </select>
          </label>
          <label>
            Arrange by:
            <select order={order} onChange={this.handleChangeOrder}>
              <option order="desc">desc</option>
              <option order="asc">asc</option>
            </select>
          </label>
        </form>
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
    api.getArticles({ topic, sort_by, order }).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticleList;
