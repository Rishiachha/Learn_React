//A Form Library helps us manage forms with less code.
//Popular libraries are React Hook Form
//without a library there would be lots of code but with react-hook forms much less code 
// before we do anything we must install npm install react-hook-form
import {useForm} from "react-hook-form"
export const FormLibrary = () => {
    const {register,handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
 // handleSubmit()
// Handles form submission
// automatically.
    return(
        <form onSubmit={handleSubmit(onSubmit)} >
            {/* register connects input with React Hook Form */}
            <input
                {...register("name")}
                placeholder = "Enter Name"
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}