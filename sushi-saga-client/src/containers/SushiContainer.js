import React, { Fragment, Component } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

class SushiContainer extends Component {
  state = {
    renderStart: 0,
    renderEnd: 4
  };

  renderSushis = (start, end) => {
    return this.props.sushis.slice(start, end).map(sushi => {
      return (
        <Sushi
          key={sushi.id}
          name={sushi.name}
          img={sushi.img_url}
          price={sushi.price}
          addEatenSushi={this.props.addEatenSushi}
          money={this.props.money}
        />
      );
    });
  };

  handleMoreSushiButton = () => {
    this.setState({
      renderStart: this.state.renderStart + 4,
      renderEnd: this.state.renderEnd + 4
    });
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className='belt'>
          {this.renderSushis(this.state.renderStart, this.state.renderEnd)}
          <MoreButton moreSushi={this.handleMoreSushiButton} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
