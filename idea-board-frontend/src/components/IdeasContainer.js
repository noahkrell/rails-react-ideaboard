import React, { Component } from "react";
import axios from "axios";
import Idea from "./Idea";

class IdeasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { ideas: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/ideas.json")
      .then(res => {
        console.log(res);
        this.setState({ ideas: res.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        {this.state.ideas.map(idea => {
          return <Idea idea={idea} key={idea.id} />;
        })}
        <br />
        <button className="newIdeaButton">New Idea</button>
      </div>
    );
  }
}

export default IdeasContainer;
