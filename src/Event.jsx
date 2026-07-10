//Event Handling
export const Event = () => {
    const Hello = () => {
        alert("Hi Hello Welcome ")
    }
    return(
        <div>
            <button onClick={Hello}>click me</button>
        </div>
    )
}
//here we have used onClick that is an event handler like it changes or makes an impact 
//whenever we press the button 
//and one more thing here we have created a new component called Hello and we have
//kept alert which when we press the button we get a alert the the the button is pressed  