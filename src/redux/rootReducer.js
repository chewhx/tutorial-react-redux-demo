import { combineReducers } from "redux";
import { cakeReducer } from "./cakes/cakeReducer";
import { iceCreamReducer } from "./icecream/icecreamReducer";
import { ballsReducer } from "./balls/ballReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  ball: ballsReducer,
  user: userReducer,
});
