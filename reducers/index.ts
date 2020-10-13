import { combineReducers } from "redux";
import counter from "./counter";

const combinedReducers = combineReducers({
  counter,
});

export type RootState = ReturnType<typeof combinedReducers>;

export default combinedReducers;
