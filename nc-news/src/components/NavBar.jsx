import React, { Component } from "react";
import "../styles/global.css";
import * as api from "../utils";
import Loader from "./Loader";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchTopics();
  };

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <Loader />;
    else {
      return (
        <nav className="Nav">
          <ul>
            <li className="navItems">
              <Link to="/">all articles</Link>
            </li>
            {topics.map((topic) => {
              return (
                <li key={topic.slug} className="navItems">
                  <Link to={`/articles/topics/${topic.slug}`}>
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
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default NavBar;
