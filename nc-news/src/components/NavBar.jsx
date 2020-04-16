import React, { Component } from "react";
import "../styles/global.css";
import * as api from "../utils";
import Loader from "./Loader";
import { Link } from "@reach/router";
import ErrorDisplay from "./ErrorDisplay";

class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true,
    topicError: null,
  };

  componentDidMount = () => {
    this.fetchTopics();
  };

  render() {
    const { topics, isLoading, topicError } = this.state;
    if (topicError)
      return <ErrorDisplay status={topicError.status} msg={topicError.msg} />;
    if (isLoading) return <Loader />;
    else {
      return (
        <nav className="container">
          <ul>
            <li>
              <Link to="/" className="nava">
                all articles
              </Link>
            </li>
            {topics.map((topic) => {
              return (
                <li key={topic.slug}>
                  <Link to={`/articles/topics/${topic.slug}`} className="nava">
                    {topic.slug}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    }
  }

  fetchTopics = () => {
    api
      .getTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          topicError: {
            status: err.response.status,
            msg: err.response.data.message,
          },
        });
      });
  };
}

export default NavBar;
