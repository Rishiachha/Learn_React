import { StudentList } from "./StudentList.jsx"
import {useState} from "react"
export const StudentForm = () => {
    const [name,setName] = useState("")
    const [course,setCourse] = useState("")
    const [age,setAge] = useState("")
    const [students,setStudents] =useState([])
    const addStudent = () => {
        // Checks whether any field is empty.
        // If yes, stop the function.
        if (name === "" || course === "" || age === "") {
            alert("Please fill all the fields");
            return;
        }
        const newStudent = {
            name: name,
            course: course,
            age: age
        };
        // Spread operator (...)
        // Copies the old students
        // and adds the new student.
        setStudents([...students, newStudent]);
         // Clear the input fields.
        setName("");
        setCourse("");
        setAge("");
    };
    return(
        <div>
            <h1>Student Management System</h1>
            <input 
                type="text"
                placeholder="Enter Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br /><br />
            <input 
                type="text"
                placeholder="Enter Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />
            <br /><br />
            <input
                type="number"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <br /><br />
            <button onClick={addStudent} >Add Student</button>
            <StudentList students={students} />
        </div>
        //Passing students array to StudentList.
    )
}
//React Topic: Forms
//Input for Name
// value connects input with state.
//Event Handling: Runs whenever user types.