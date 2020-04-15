import React, { Component } from "react";
import * as api from "../utils";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
    clicks: 0,
  };

  handleClick = (vote) => {
    this.setState((currentState) => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote,
        clicks: 1,
      };
    });
    api.patchVotes(vote, this.props.id, this.props.type);
  };

  render() {
    const { optimisticVotes, clicks } = this.state;
    return (
      <div className="votesBox">
        <p>Votes: {this.props.votes + optimisticVotes}</p>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={clicks > 0}
        >
          Yay!
        </button>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={clicks > 0}
        >
          Nay!
        </button>
      </div>
    );
  }
}

export default Voter;
