import { createContext, useReducer, useState } from "react";
import { employeeReducer } from "../reducer/employeeReducer";
export const UserContext = createContext();
function UserProvider({ children }) {
    //Stores all employees.and Employee data can be added and removed So multiple actions are handled inside
    const [employees, dispatch] = useReducer(
        employeeReducer,
        // Initial Employee List
        []
    );
    const [search, setSearch] = useState("");
    //shared admin Name that means every component can access this value
    const admin = "Rishi";
    return (
        /*Provider Shares data with every component.Instead of passing props, any component can use useContext() to access these values.
    */
        <UserContext.Provider
            value={{
                admin,
                employees,
                dispatch,
                search,
                setSearch
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;
