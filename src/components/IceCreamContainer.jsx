import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of ice-cream: {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy ice-cream</button>
    </div>
  );
};

// access redux state, get redux state as paramters to get properties
const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

// get dispatch as paramter, to match actions
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

// connect function from react-redux to combine the state and component
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
