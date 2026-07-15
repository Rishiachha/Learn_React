import { useContext } from "react";
import { UserContext } from "./UserApp";
export default function User () {
  // Receive data from Context
  const name = useContext(UserContext);
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
}
