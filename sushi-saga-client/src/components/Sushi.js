import React from 'react'

class Sushi extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      eaten: false
    }
  }
  render(){
    return (
      <div className="sushi">
        <div className="plate"
           onClick={this.handleClick}>
           {this.state.eaten
            ? null
            : <img src={this.props.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
  handleClick = (e) => {
    console.log(e.target)
    this.setState({eaten: true})
    // gotta pass a callback up to decrease the user's money
    // and have to be able to read that amount of money here

    // I think we can keep these from re-appearing with "shouldComponentUpdate"
  }
}

export default Sushi
