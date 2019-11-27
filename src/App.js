import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {


  state = {
    robots: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => this.setState({
      robots: data
    }))
}


  render() {
    // console.log(this.state.robots)
    return (
      <div className="App">
        <BotsPage robots={this.state.robots}/>
      </div>
    );
  }
}

export default App;
