//The Fetch API is used to get data from a server or API.
//Instead of manually writing data,we fetch it from a backend.
import {useState} from "react"
export const FetchApi = () => {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }
    return (
        <div>
            <button onClick={getUsers}>Load Users</button>
            <br />
            {
                users.map((user) => (
                    <h3 key={user.id}>
                        {user.name}
                    </h3>
                ))
            }
        </div>
    )
}
