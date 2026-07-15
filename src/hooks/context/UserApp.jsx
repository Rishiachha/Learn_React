//useContext is a React Hook that allows one component to use data from another component without passing props.
import { createContext } from "react";
import User from "./User";
// Create Context
export const UserContext = createContext();
export const UserApp = () => {
  // Data to share
  const name = "Rishi";
  return (
    // Provider shares the data
    <UserContext.Provider value={name}>
        {/* Provider shares the value
         Here we are sharing "Rishi".*/}
      <h1>App Component</h1>
      <User />
    </UserContext.Provider>
  );
}
// createContext()
// Creates a Context object.
// Think of it as a container
// that stores shared data.
