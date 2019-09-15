import React, { Fragment, Component } from 'react';

class Sushi extends Component {
  state = {
    eaten: false
  };

  eatSushi = () => {
    this.setState(
      {
        eaten: true
      },
      () => this.props.addEatenSushi(this.props.price)
    );
  };

  render() {
    return (
      <div className='sushi'>
        <div
          className='plate'
          onClick={
            this.props.money >= this.props.price && !this.state.eaten
              ? this.eatSushi
              : null
          }
        >
          {this.state.eaten ? null : <img src={this.props.img} width='100%' />}
        </div>
        <h4 className='sushi-details'>
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
