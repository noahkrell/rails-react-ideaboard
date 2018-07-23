import React, { Component } from "react";
import "./App.css";
import IdeasContainer from "./components/IdeasContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="title">Idea Board</h1>
        </div>
        <br />
        <div className="ideas-container">
          <IdeasContainer />
        </div>
      </div>
    );
  }
}

export default App;
