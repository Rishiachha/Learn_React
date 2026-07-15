//A Controlled Component is an input whose value is controlled by React state.
//Why do we use it?
//React always knows what the user is typing.
import { useState } from "react";
export const Controlled = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
    </div>
  )
}