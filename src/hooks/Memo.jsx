//useMemo() Remembers the expensive calculated value so that it oes not run everytime
// It recalculates only when number changes.
// Improves performance by avoiding unnecessary calculations.
import { useState, useMemo } from "react";
export const Memo = () => {
  const [number, setNumber] = useState(0);
  const square = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>Square : {square}</h2>
    </div>
  );
}