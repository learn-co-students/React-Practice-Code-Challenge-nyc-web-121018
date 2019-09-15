import React, { Component } from "react";

class Sushi extends Component {
  state = {
    eaten: false
  };

  sushiEaten = () => {
    if (this.props.money >= this.props.sushi.price) {
      this.setState({ eaten: true });
      this.props.decrementCustomerAccount(this.props.sushi.price);
      this.props.incrementEmptyPlates(1);
    } else {
      this.props.changeColor();
    }
  };

  render() {
    const { name, img_url, price } = this.props.sushi;
    return (
      <div className="sushi">
        <div className="plate" onClick={this.sushiEaten}>
          {this.state.eaten ? null : (
            <img src={img_url} width="100%" alt={name} />
          )}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
