import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    display: [0, 1, 2, 3],
    customerAccount: 100,
    emptyPlates: [],
    color: "black"
  };

  incrementDisplayCount = () => {
    let newDisplay = [...this.state.display];
    newDisplay = newDisplay.map(num => num + 4);
    this.setState({
      display: newDisplay
    });
  };

  incrementEmptyPlates = el => {
    let newEmptyPlate = [...this.state.emptyPlates, el];
    this.setState({ emptyPlates: newEmptyPlate });
  };

  decrementCustomerAccount = amount => {
    this.setState({ customerAccount: this.state.customerAccount - amount });
  };

  changeColor = () => {
    this.setState({ color: "red" });
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushisdata => {
        this.setState({ sushis: sushisdata });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          display={this.state.display}
          incrementDisplayCount={this.incrementDisplayCount}
          decrementCustomerAccount={this.decrementCustomerAccount}
          money={this.state.customerAccount}
          incrementEmptyPlates={this.incrementEmptyPlates}
          changeColor={this.changeColor}
        />
        <Table
          money={this.state.customerAccount}
          emptyPlates={this.state.emptyPlates}
          color={this.state.color}
        />
      </div>
    );
  }
}

export default App;
