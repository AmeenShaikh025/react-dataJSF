import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Hello from "./components/Hello";
import Counter from "./components/Couter";
import Greetingsclass from "./components/Greetingsclass";
import Apicall from "./components/Apicall";

class App extends React.Component {
  state = {
    usernames: ["asif", "bhavya", "abhishek", "karthik", "vishal", "ameen"]
  };

  render() {
    const { usernames } = this.state;
    return (
      <div className="App">
        Hello text
        <Greeting username={"JsFactory"} />
        <Hello />
        <Counter />
        <ol>
          {usernames.map((user, index) => {
            return (
              <li>
                <Greetingsclass item={user} key={index} />
              </li>
            );
          })}
        </ol>
        <Apicall />
      </div>
    );
  }
}

export default App;
