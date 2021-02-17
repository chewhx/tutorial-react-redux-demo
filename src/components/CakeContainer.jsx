import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cakes</button>
    </div>
  );
};

// access redux state, get redux state as paramters to get properties
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// get dispatch as paramter, to match actions
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// connect function from react-redux to combine the state and component
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
