import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
export const EmployeeForm = () => {
    const { admin, dispatch } = useContext(UserContext);
    //Both the logged-in admin and the dispatch function are shared through Context, so we don't have to pass them as props 
    // through multiple components.
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");
    const nameInput = useRef();
    const addEmployee = (e) => {
        e.preventDefault();
        if (
            name === "" ||
            department === "" ||
            salary === ""
        ) {
            alert("Please Fill All Fields");
            return;
        }
        //Instead of updating the employee list directly, we send an action to the reducer. The reducer decides how the state changes.
        dispatch({
            type: "ADD",
            payload: {
                id: Date.now(),
                name,
                department,
                salary
            }
        });
        //Automatically puts the cursor back into the first input after adding an employee.
        setName("");
        setDepartment("");
        setSalary("");
        nameInput.current.focus();
    }
    return (
        <div>
            <h2>Welcome {admin}</h2>
            <form onSubmit={addEmployee}>
                <input
                    ref={nameInput}
                    type="text" placeholder="Employee Name" value={name} onChange={(e) =>setName(e.target.value)}
                />
                <br />
                <input
                    type="text" placeholder="Department" value={department} onChange={(e) =>setDepartment(e.target.value)}
                />
                <br />
                <input
                    type="number" placeholder="Salary" value={salary} onChange={(e) =>setSalary(e.target.value)}
                />
                <br />
                <button>Add Employee</button>
            </form>
        </div>
    );
}
