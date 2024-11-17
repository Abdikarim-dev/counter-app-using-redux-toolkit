import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./redux/counterReducer.js";
const App = () => {
  // const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const val = useSelector((state) => state.counter);

  // {

  //   actions - method oo ay leedahay react-redux waxa ay kuu
  //   suurtagelinayso waxaa waaye in actions-ka
  //   aad soo sameysate inaad isticmaasho (dispatch UseDispatch)

  //   state - useSelector waxaa iska react-redux waxeyna awood
  //             kuu siinaysaa inaad xogta
  //             state-ka ku jirto inaad soo hesho

  // }

  const [inp, setInp] = useState(0);
  return (
    <div>
      <h1>Redux Counter App</h1>
      <p style={{ paddingInline: "150px" }}>{val?.value}</p>
      <input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        type="number"
      />
      <br /> <br />
      <button
        onClick={() =>
          // setCounter(counter + 1)
          {
            console.log("Increment");
            dispatch(increment());
          }
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          // setCounter(counter - 1)
          {
            console.log("Decrement");
            dispatch(decrement());
          }
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          // setCounter(0)
          {
            console.log("Reset");
            dispatch(reset());
            setInp(0);
          }
        }
      >
        Reset
      </button>
      <button
        onClick={() =>
          // setCounter(counter + Number(value))
          dispatch(incrementByAmount(inp))
        }
      >
        Increment By Amount
      </button>
      {/*
      <button onClick={() => setCounter(counter - Number(value))}>
        Decrement By Amount
      </button> 
      */}
    </div>
  );
};

export default App;
