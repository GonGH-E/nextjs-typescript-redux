import produce from "immer";
import { Actions } from "../types";
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "../types/counter";

export type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

const reducer = produce((state: State, action: Actions) => {
  switch (action.type) {
    case RESET_COUNTER: {
      return initialState;
    }
    case INCREMENT_COUNTER: {
      state.count = state.count + 1;
      return;
    }
    case DECREMENT_COUNTER: {
      state.count = state.count - 1;
      return;
    }
  }
}, initialState);

export default reducer;
