import React, { Component } from "react";
import "../src/styles/global.css";
import HeaderBar from "./components/HeaderBar";

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
      </div>
    );
  }
}

export default App;
