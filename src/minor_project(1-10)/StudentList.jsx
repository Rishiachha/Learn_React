import { StudentCard } from "./StudentCard";
export const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      {
        students.length === 0 ? (
          <h3>No Student</h3>
        ) : (
          students.map((student, index) => (
            <StudentCard
              key={index}
              student={student}
            />
          ))
        )
      }
    </div>
  );
};