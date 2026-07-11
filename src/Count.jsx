//useState
import {useState} from "react"
export const Count = () => {
    // count stores the current value.
    // setCount updates it.
    const [count,setCount] = useState(0)
    //useState(0) means the initial value is 0
    // Updates state and  causes React to re-render the component.
    const increase = () => {
        setCount(count+1)
    }
    return(
        <div>
            <h1>Count = {count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    )
}