// useRef():stores the value but when the value changes it deos not render
// Stores a reference ref={inputRef}
// Connects React to the HTML element with inputRef.current
// Gives access to the real input.
// focus()
// Places the cursor inside the input.
import { useRef } from "react";
export const Ref = () => {
  // Creates a reference to the input element
  const inputRef = useRef();
  const focusInput = () => {
    // Focuses the input
    inputRef.current.focus();
  }
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter Name"
      />
      <br /><br />
      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}
