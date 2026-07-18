//Memoization is an optimization technique where we store the result of an expensive calculation or function and reuse it
//instead of calculating it again.
/*React components re-render when:
->State changes
->Props change
->Parent component re-renders
*/
/*Types of Memoization in React
->React.memo() Prevent unnecessary component re-rendering.
->useMemo() Remember calculated values.
->useCallback() Remember function reference.
*/
import { useMemo, useState } from "react";
//Here:We calculate total salary.Instead of calculating on every render,React remembers the result.
export const Memorization = () => {
    const [count, setCount] = useState(0);
    const employees = [
        {
            name:"Rishi",
            salary:50000
        },
        {
            name:"Rahul",
            salary:40000
        },
        {
            name:"Priya",
            salary:60000
        }
    ]
    /*
    Without useMemo:Every time component renders,this calculation runs again.
    With useMemo:React stores the result.It runs only when employees change.
    */
    const totalSalary = useMemo(()=>{
        console.log("Calculating Salary");
        return employees.reduce(
            (total,employee)=>{
                return total + employee.salary;
            },
            0
        );
    },[employees]);
    return (
        <div>
            <h1>Employee Salary</h1>
            <h2>Total Salary:{totalSalary}</h2>
            <button onClick={()=>setCount(count+1)}>Re-render Component</button>
            <p>Button Clicks:{count}</p>
        </div>
    )
}