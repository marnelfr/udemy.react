import React, { Component } from "react";

import "./App.css";
import Modal from "./Modal/Modal";
import Backdrop from "./Backdrop/Backdrop";
import List from "./List/List";
import {Transition} from "react-transition-group";

class AnimationApp extends Component {
  state = {
    showModal: false,
    showDiv: false
  }

  showModal = () => {
    this.setState({showModal: true})
  }

  hideModal = () => {
    this.setState({showModal: false})
  }

  toggler = () => {
    this.setState(state => ({showDiv: !state.showDiv}))
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={this.toggler} className="Button">Toggle</button>
        <Transition in={this.state.showDiv} mountOnEnter unmountOnExit on timeout={400}>
          {state => <div
            style={{
              background: 'red',
              height: 100,
              width: 100,
              margin: 'auto',
              opacity: state === 'entered' ? 1 : 0,
              transition: 'opacity 0.4s linear'
            }}
          />}
        </Transition>
        <br/><br/>
        <Modal show={this.state.showModal} closed={this.hideModal} />
        {this.state.showModal && <Backdrop closed={this.hideModal} show />}
        <button onClick={this.showModal} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default AnimationApp;
