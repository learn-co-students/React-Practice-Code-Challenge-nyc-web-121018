import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  const mappedSushis = () =>
    props.sushis.map(sushi => {
      return (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          decrementCustomerAccount={props.decrementCustomerAccount}
          money={props.money}
          incrementEmptyPlates={props.incrementEmptyPlates}
          changeColor={props.changeColor}
        />
      );
    });

  return (
    <Fragment>
      <div className="belt">
        {mappedSushis()[props.display[0]]} {mappedSushis()[props.display[1]]}{" "}
        {mappedSushis()[props.display[2]]} {mappedSushis()[props.display[3]]}
        <MoreButton incrementDisplayCount={props.incrementDisplayCount} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
