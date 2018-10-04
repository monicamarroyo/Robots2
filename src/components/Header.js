import React, { Component } from "react";
import CounterButton from "./CounterButton";
import CounterButton2 from "./CounterButton2";
class Header extends Component {
  //header gets rerendered onto the screen twice header, searchbox and cardlist
  //reactlifecyle hook if it true it will update component else it wont
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    // console.log('Header');
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color={"red"} />
        <CounterButton2 />
      </div>
    );
  }
}

export default Header;
