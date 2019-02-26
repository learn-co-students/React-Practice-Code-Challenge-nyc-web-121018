import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis = {this.state.data}/>
        <Table />
      </div>
    );
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(parsed => this.setState({data: parsed}))
  }
}

export default App;
