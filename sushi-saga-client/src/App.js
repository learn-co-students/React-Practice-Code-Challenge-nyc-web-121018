import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
  state = {
    sushis: [],
    money: 100,
    eatenSushi: []
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(allSushi => {
        // allSushi.length = 4;
        this.setState({
          sushis: allSushi
        });
      });
  }

  addEatenSushi = sushiPrice => {
    let newEatenSushi =
      this.state.money > sushiPrice
        ? [...this.state.eatenSushi, sushiPrice]
        : this.state.eatenSushi;
    this.setState({
      eatenSushi: newEatenSushi,
      money:
        this.state.money >= sushiPrice
          ? this.state.money - sushiPrice
          : this.state.money
    });
  };

  render() {
    console.log('app', this.state);
    return (
      <div className='app'>
        <SushiContainer
          sushis={this.state.sushis}
          addEatenSushi={this.addEatenSushi}
          money={this.state.money}
        />
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
