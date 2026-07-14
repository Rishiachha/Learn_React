import {Child} from "./Child"
export const Parent = ({name}) => {
    return(
        // Parent doesn't use 'name'.
        // It simply passes it to Child.
        <div>
            <h2>Parent Component</h2>
            <Child name={name} />
        </div>
    )
}
// Props Drilling : Props Drilling means passing data through multiple components, even if the middle component doesn't use the data.
// App
// ↓
// Parent

// ↓
// Child

// ↓
// GrandChild

// Data passes through components
// even if they don't need it.
