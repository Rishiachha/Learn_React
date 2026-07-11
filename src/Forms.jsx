import {useState} from "react"
export const Forms = () => {
    const [name,setName] = useState("")
    return(
        <div>
            <h2>Enter Name</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h1>Hello {name}</h1>
        </div>
    )
}