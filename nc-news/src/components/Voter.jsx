import React, { Component } from "react";
import * as api from "../utils";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
  };

  handleClick = (vote) => {
    this.setState((currentState) => {
      return {
        optimisticVotes: currentState.optimisticVotes + vote,
      };
    });
    api.patchVotes(vote, this.props.id, this.props.type);
  };

  render() {
    const { optimisticVotes } = this.state;
    return (
      <div className="votesBox">
        <p>Votes: {this.props.votes + optimisticVotes}</p>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={optimisticVotes > 0}
        >
          Yay!
        </button>
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={optimisticVotes < 0}
        >
          Nay!
        </button>
      </div>
    );
  }
}

export default Voter;
