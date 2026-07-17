import { useState } from "react";
//Filter displays only the data that satisfies a condition.
//Here,we display students whose age is greater than or equal to 18.
export const Filter = () => {
    /*
    This state stores whether filtering is enabled.
    false -> Show all students
    true -> Show only adults
    */

    const [showAdults, setShowAdults] = useState(false);
    const students = [
        { name: "Rishi", age: 20 },
        { name: "Rahul", age: 17 },
        { name: "Priya", age: 21 },
        { name: "Kiran", age: 16 }
    ];
    /*
    If showAdults is true,use filter() otherwise show the complete array.
    */
    const filteredStudents = showAdults
        ? students.filter((student) => student.age >= 18)
        : students;
    return (
        <div>
            <h1>Age Filter</h1>
            {/*
            Clicking the button
            changes
            false -> true
            true -> false
            */}
            <button
                onClick={() =>setShowAdults(!showAdults)}
            >
                {
                    showAdults
                    ? "Show All"
                    : "Show Adults"
                }
            </button>
            {
                filteredStudents.map((student, index) => (
                    <div key={index}>
                        <h3>{student.name}</h3>
                        <p>Age : {student.age}</p>
                    </div>
                ))
            }
        </div>
    );
};