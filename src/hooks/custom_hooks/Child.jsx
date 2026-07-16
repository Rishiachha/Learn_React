import {Parent} from "./Parent"
export const Child = () => {
    const [count,increase] = useCounter()
    return(
        <div>
            <h1>Count = {count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    )
}