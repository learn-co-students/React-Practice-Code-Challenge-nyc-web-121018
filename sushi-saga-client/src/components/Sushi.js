import React, { Component, Fragment } from 'react'

class Sushi extends Component {
  state = {
    eaten: false,
  }
  eatSushi = () => {
    this.setState({eaten: !this.state.eaten})
    this.props.incrementPlate()
    this.props.subtractPrice(this.props.theSushi.price)
  }

  handleClick = () => {
    this.props.money < this.props.theSushi.price?
      null
    :
      this.eatSushi()
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          {
            this.state.eaten ?
              null
            :
              <img src={this.props.theSushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.theSushi.name} - ${this.props.theSushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
