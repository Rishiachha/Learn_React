//React.memo():is a Higher Order Component (HOC) that memoizes a component.
//It prevents a component from re-rendering if its props have not changed.
//Normally, when a parent component re-renders, all of its child components also re-render, even if the child's data hasn't changed.
//React.memo avoids these unnecessary re-renders, improving performance.
//When do we use it?
//1.Large applications
//2.Expensive UI components
//3.Components receiving the same props repeatedly
//4.Performance optimization
import { useState } from "react";
import {ReactMemoChild} from "./ReactMemoChild";

export const ReactMemo = () => {
  // Stores the counter value.
  // Updating this state causes App to re-render.
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      {/* Event Handling */}
      <button
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      {/* Child receives the same prop every time */}
      <ReactMemoChild name="Rishi" />
    </div>
  );
}
