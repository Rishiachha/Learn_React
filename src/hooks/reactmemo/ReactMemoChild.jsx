import React from "react";
export const ReactMemoChild = React.memo(({ name }) => {
  console.log("Child Component Rendered");
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
});
// React.memo remembers the previous props.
// If props are unchanged,
// React skips re-rendering this component.
