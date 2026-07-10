export const Display = () => {
    const Name = "Rishi"
    const Age = 20
    const College = "Mahindra University"
    const Roll_Number = 7
// JSX allows JavaScript inside curly braces 
//so anything inside {} becomes javascript
    return(
        <div>
            <h1>Student Details</h1>
            <p>Name = {Name}</p>
            <p>Age = {Age}</p>
            <p>College = {College}</p>
            <p>Roll Number = {Roll_Number}</p>
        </div>
    )
}