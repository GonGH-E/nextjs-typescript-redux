import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, resetCount } from "../actions/counter";
import { RootState } from "../reducers";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(incrementCount())}
      >
        +1
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(decrementCount())}
      >
        -1
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(resetCount())}
      >
        Reset
      </Button>
    </div>
  );
};

export default Counter;
