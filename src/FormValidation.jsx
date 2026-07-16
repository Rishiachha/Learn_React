//Form Validation checks whether the user has entered the correct data before submitting.
//Prevent empty inputs
//Prevent invalid email
//Improve user experience
import {useState} from "react"
export const FormValidation = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
// if(name==="")
// Checks whether the user
// entered anything.
    const submitForm = () => {
        if(name === "") {
            alert("Name is Required")
        }
        else if(age === "") {
            alert("mentioning age is important")
        }
        alert("form is submitted")
    }
 // return
// Stops the function
// if validation fails.
    return(
        <div>
            <h2>Details</h2>
            <input type="text" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} />
            <br />
            <input type="age" placeholder="enter your age" onChange={(e)=>setAge(e.target.value)} />
            <br />
            <button onClick={submitForm}>Submit</button>
        </div>
    )
}
