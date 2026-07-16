//A Custom Hook is a JavaScript function that starts with use and contains reusable React Hook logic.
//Instead of writing the same useState or useEffect code in multiple components, we write it once in a custom hook and reuse it.
import {useState} from "react"
export const Parent = () => {
     // Stores the counter value
    const [count,setCount] = useState(0)
    // Increase count
    const increase = () => {
        setCount(count+1)
    }
    //return everything we need
    return(
        count,
        increase
    )
}