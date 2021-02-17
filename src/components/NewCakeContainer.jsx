import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const NewCakeContainer = () => {
  const [number, setNumber] = useState(1);
  // useSelector takes state as params and return the value
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Num of cakes - {numOfCakes} </h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} cakes</button>
    </div>
  );
};

export default NewCakeContainer;
