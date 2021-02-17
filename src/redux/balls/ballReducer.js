import { ADD_BALLS } from "./ballConstant";

const initialState = {
  numOfBalls: 54,
};

export const ballsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BALLS:
      return {
        ...state,
        numOfBalls: state.numOfBalls + 1,
      };
      break;

    default:
      return state;
      break;
  }
};
