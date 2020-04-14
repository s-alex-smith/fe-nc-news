import React, { Component } from "react";
import "../src/styles/global.css";
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";

class App extends Component {
  state = {
    userInfo: {
      username: "Jess Jelly",
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
        </Router>
      </div>
    );
  }
}

export default App;
