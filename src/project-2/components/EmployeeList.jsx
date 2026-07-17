import { useContext, useMemo, useCallback } from "react";
import { UserContext } from "../context/UserContext";
import EmployeeCard from "./EmployeeCard";
export const EmployeeList = () => {
    const {employees,search,dispatch} = useContext(UserContext);
    const filteredEmployees = useMemo(() => {
        return employees.filter((employee) =>
            employee.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [employees, search]);
    /*
    useCallback : This function is passed to EmployeeCard.Without useCallback,a new function gets created every render.
    useCallback remembers the same function.React.memo will use this.
    */

    const deleteEmployee = useCallback((id) => {
        dispatch({
            type: "DELETE",
            payload: id
        });
    }, [dispatch]);
    return (
        <div>
            <h2>Employee List</h2>
            {
                filteredEmployees.length === 0 ?
                    <h3>No Employees Found</h3>
                    :
                    filteredEmployees.map((employee) => (
                        //Props Drilling : Passing employee data and delete function to EmployeeCard.
                        <EmployeeCard
                            key={employee.id} employee={employee} deleteEmployee={deleteEmployee}
                        />
                    ))
            }
        </div>
    );
}
