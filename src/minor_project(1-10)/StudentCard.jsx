export const StudentCard = ({student}) => {
    return(
        <div>
            <h3>name={student.name}</h3>
            <h3>course={student.course}</h3>
            <h3>Age={student.age}</h3>
        </div>
    )
}