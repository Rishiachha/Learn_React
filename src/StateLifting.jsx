//State lifting means moving state to the nearest common parent so multiple components can 
// share it.
//so this have 2 more files which are input and display
// Parent owns the state.
// Child components receive it as props.
// InputBox Changes the parent's state.
// Display Reads the parent's state.
// Both stay synchronized because
// they use the same source of truth.
import {useState} from "react"
import {InputBox} from "./InputBox"
import {DisplayBox} from "./DisplayBox"
export const StateLifting = () => {
    // Shared state lives in the parent
    const [name,setName] = useState("");
    return(
        <div>
            <InputBox name={name} setName={setName} />
            <DisplayBox name={name} />
        </div>
    )
}