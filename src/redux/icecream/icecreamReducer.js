import { BUY_ICECREAM } from "./icecreamConstant";

const initialState = {
  numOfIceCream: 99,
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
      break;

    default:
      return state;
      break;
  }
};
