import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
//should hold state of the sushis to pass down price to table and info to sushi container
class App extends Component {
  constructor(){
    super()
    this.state = {
      allSushis: [],
      renderedSushi: [],
      emptyPlateCounter: [],
      money: 100,
    }
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({
        allSushis: data,
        renderedSushi: data.slice(0,4),
      }))
  }

  cycleSushis = () => {
    let allSushisCopy = [...this.state.allSushis]
    let lastSushiIndex = allSushisCopy.indexOf(this.state.renderedSushi[this.state.renderedSushi.length - 1])
    this.setState({renderedSushi: allSushisCopy.slice(lastSushiIndex+1, lastSushiIndex+5)})
  }

  incrementPlate = () => {
    if (this.state.emptyPlateCounter.length === 0) {
      this.setState({emptyPlateCounter: [1]})
    }else {
      this.setState({emptyPlateCounter: [...this.state.emptyPlateCounter, [1]]})
    }
  }

  subtractPrice = (price) => {
    this.setState({money: this.state.money - price}, console.log(this.state.money))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          renderedSushis={this.state.renderedSushi}
          cycleSushis={this.cycleSushis}
          incrementPlate={this.incrementPlate}
          subtractPrice={this.subtractPrice}
          money={this.state.money}
          />
        <Table
          allSushis={this.state.allSushis}
          emptyPlateCounter={this.state.emptyPlateCounter}
          money={this.state.money}
          />
      </div>
    );
  }
}

export default App;

//          (App)
//        /        \
//      (SC)      (Table)
//    /     \
//(sushi) (button)
//
