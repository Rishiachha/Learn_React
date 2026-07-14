import {Child} from "./Child"
import {useCallback,useState} from "react"

export const CallBack = () => {
    const [count,setCount] = useState(0)
    const greet = useCallback(() => {
        alert("Hello Rishi")
    },[])
    return(
        <div>
            <h1>{count}</h1>
            <button onClick ={()=> setCount(count+1)}>Increase</button>
            <Child greet={greet} />

        </div>
    )
}