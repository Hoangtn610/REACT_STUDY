import React from "react";
import logo from "../logo.svg";
import "../App.css";
class Home extends React.Component {
  componentDidMount = () => {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  };

  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1
        </a>
      </>
    );
  }
}

export default Home;
