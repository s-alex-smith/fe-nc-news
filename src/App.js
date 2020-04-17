import React, { Component } from "react";
import "../src/styles/global.css";
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import ErrorDisplay from "./components/ErrorDisplay";

class App extends Component {
  state = {
    userInfo: {
      username: "jessjelly",
    },
  };
  render() {
    return (
      <div className="App">
        <HeaderBar username={this.state.userInfo.username} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/articles/topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          <Comments
            path="/articles/:article_id/comments"
            username={this.state.userInfo.username}
          />
          <ErrorDisplay default status={404} msg={"page not found"} />
        </Router>
      </div>
    );
  }
}

export default App;
