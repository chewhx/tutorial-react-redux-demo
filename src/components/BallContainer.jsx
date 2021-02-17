import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBalls } from "../redux";

const BallContainer = () => {
  const numOfBalls = useSelector((state) => state.ball.numOfBalls);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Num of BALLS - {numOfBalls}</h1>
      <button onClick={() => dispatch(addBalls())}>ADD BALLS</button>
    </div>
  );
};

export default BallContainer;
