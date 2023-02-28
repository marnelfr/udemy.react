import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Section24/Modal/Modal";
import Backdrop from "./components/Section24/Backdrop/Backdrop";
import List from "./components/Section24/List/List";

class App extends Component {
  state = {
    showModal: true
  }

  showModal = () => {
    this.setState({showModal: true})
  }

  hideModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.showModal} closed={this.hideModal} />
        <Backdrop show={this.state.showModal} />
        <button onClick={this.showModal} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
