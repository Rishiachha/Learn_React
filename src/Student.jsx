//Props
//Props are used to send data and props are read only data
//parent => child
export const Student = (props) => {
    return(
        <div>
            <p>name = {props.name}</p>
            <p>Age = {props.age}</p>
        </div>
    )
}