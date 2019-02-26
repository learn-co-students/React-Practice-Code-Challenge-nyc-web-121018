import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let renderSushiComponets = () => {
    if (props.renderedSushis === null) {
      return null;
    }else{
      return props.renderedSushis.map(
        sushi => <Sushi
        key={sushi.id}
        theSushi={sushi}
        incrementPlate={props.incrementPlate}
        subtractPrice={props.subtractPrice}
        money={props.money}/>)
    }
  }
    // console.log(state.renderedSushi);
  return (
    <Fragment>
      <div className="belt">
        {renderSushiComponets()}
        <MoreButton cycleSushis={props.cycleSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
