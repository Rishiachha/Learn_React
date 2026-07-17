import React from "react";
/* employee This prop contains id name department salary coming from EmployeeList.*/
/* deleteEmployee This function comes from EmployeeList. It tells useReducer which employee to delete.*/
const EmployeeCard = React.memo(({ employee, deleteEmployee }) => {
    return (
        <div>
            <p>Name : {employee.name}</p>
            <p>Department : {employee.department}</p>
            <p>Salary : ₹{employee.salary}</p>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
        </div>
    );
});

export default EmployeeCard;