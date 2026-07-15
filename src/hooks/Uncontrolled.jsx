//An Uncontrolled Component stores data inside the HTML element instead of React state.
//We use useRef to read the value.
import { useRef } from "react";
export const Uncontrolled = () => {
  const inputRef = useRef();
  function showName() {
    alert(inputRef.current.value);
  }
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
      />
      <button
        onClick={showName}
      >
        Show Name
      </button>
    </div>
  );
}
