import { combineReducers } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";
import { iceCreamReducer } from "./icecream/icecreamReducer";
import { ballsReducer } from "./balls/ballReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  ball: ballsReducer,
});
