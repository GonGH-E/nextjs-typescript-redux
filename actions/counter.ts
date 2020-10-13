import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "../types/counter";

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: INCREMENT_COUNTER });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: DECREMENT_COUNTER });

// RESET COUNTER
export const resetCount = () => ({ type: RESET_COUNTER });
