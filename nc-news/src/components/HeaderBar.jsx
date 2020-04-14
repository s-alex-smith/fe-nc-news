import React from "react";

const HeaderBar = (props) => {
  return (
    <header className="Header">
      <h1>Northcoders News</h1>
      <p>Welcome {props.username}</p>
    </header>
  );
};

export default HeaderBar;
