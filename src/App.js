import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      joke: "",
      joke_list: [],
      index: -1
    };
    this.prevJoke = this.prevJoke.bind(this);
    this.nextJoke = this.nextJoke.bind(this);
  }

  async componentDidMount() {
    this.getNewJoke();
  }

  async getNewJoke() {
    console.log("new joke");
    const response = await fetch(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: 'application/json'
      }
    });
    const json = await response.json();
    console.log(this.state.index);
    this.setState({ 
      joke: json.joke,
      joke_list: this.state.joke_list.concat([json.id]),
      index: this.state.index+1
     });
     console.log(this.state.index);
     console.log(this.state.joke_list);
  }

  async getPrevJoke() {
    console.log("entered getjokebyid");
    console.log(this.state.joke_list[this.state.index-1]);
    const response2 = await fetch("https://icanhazdadjoke.com/j/" + this.state.joke_list[this.state.index-1], {
      headers: {
        Accept: 'application/json'
      }
    });
    const json2 = await response2.json();
    this.setState({
      joke: json2.joke,
      index: this.state.index-1
    });
  }

  async getNextJoke() {
    const response3 = await fetch("https://icanhazdadjoke.com/j/" + this.state.joke_list[this.state.index+1], {
      headers: {
        Accept: 'application/json'
      }
    });
    const json3 = await response3.json();
    this.setState({
      joke: json3.joke,
      index: this.state.index+1
    });
  }


  prevJoke(){
    console.log("entered");

    console.log(this.state.index);
    if ((this.state.index > 0)) {
      this.getPrevJoke();
      }
    }

  nextJoke() {

    console.log(this.state.joke_list);
    console.log(this.state.index);
    if ((this.state.index+1 === this.state.joke_list.length)) {
      this.getNewJoke();
    } else {
      this.getNextJoke();
    }
  }

  render() {
    return (
      <div className="generator">
      <div className="header">
      <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/339217_244815522248767_1884044519_o.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=0d30a0fa0a038a678db58edbfabf9c7d&oe=5D117D9D" className="LMAO" alt="LMFAOOOOOO" height="150"/>
        <header className="joke-title">
          julia joke generator
        </header>
      </div>
        <div className = "joke">
          {this.state.joke}
        </div>
        <div className = "clicky">
          <button
                className="prev"
                type="button"
                onClick={this.prevJoke}
              >
                prev
          </button>
          <button
                className="next"
                type="button"
                onClick={this.nextJoke}
              >
                next
          </button>
        </div>
      </div>
    );
  }
}
export default App;