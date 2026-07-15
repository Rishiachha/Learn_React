//useReducer is a React Hook used to manage state using actions.
//It works like useState, but is better when there are multiple ways to update the state.
// reducer(): Decides how the state changes.
import { useReducer } from "react";
export const reducer = (state, action) => {
  if (action === "increase") {
    return state + 1;
  }
  return state;
}
// Calls reducer() reducer receives
// state = current value
// action = "increase"
export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch("increase")}
      >
        Increase
      </button>
    </div>
  );
}
