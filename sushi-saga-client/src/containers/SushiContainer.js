import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

class SushiContainer extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      sushiIndex: 0
    }
  }

  generateSushiComponents = () => {
    console.log(this.props.sushis)
    let sushisDisplayed = this.props.sushis.slice(this.state.sushiIndex, this.state.sushiIndex+4)
    //return this.props.sushis.map((sushi)=> <Sushi {...sushi} key={sushi.id}/>)
    return sushisDisplayed.map((sushi)=> <Sushi {...sushi} key={sushi.id}/>)
  }

  render(){
    return (
      <React.Fragment>
        <div className="belt">
          {this.generateSushiComponents()}
          <button onClick = {this.handleClick}>More sushi!</button>
        </div>
      </React.Fragment>
    )
  }

  handleClick = (e) =>{
    if(this.state.sushiIndex >= (this.props.sushis.length-4)){
      this.setState({sushiIndex : 0})
    } else {
    this.setState({sushiIndex: (this.state.sushiIndex+4)})
    console.log(this.state.sushiIndex)
    }
  }

}
export default SushiContainer
