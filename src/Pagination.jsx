//Pagination is the process of displaying a small number of items at a time instead of showing everything at once.
//Instead of displaying 1000 records on one page, we split them into smaller pages.
import {useState,useEffect} from "react"
export const Filtering = () => {
    const[comment,setComment] = useState([])
    const [search,setSearch] = useState('')
    const [desbouncedSearch,setDebouncedSearch] = useState(search)
    const [data,setData] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage=10

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(data=>setComment(data))
    },[])
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearch(search)
        },1000)
        return() => clearTimeout(timerId)
    })
    const filteredComment = comment.filter((comment) => 
        `${comment.name} ${comment.email} ${comment.body}`.toLowerCase().includes(desbouncedSearch.toLowerCase())
    )
    const lastIndex = itemsPerPage * currentPage
    const firstIndex = lastIndex - itemsPerPage

    const currentData = filteredComment.slice(firstIndex,lastIndex)
    const totalPages = Math.ceil(filteredComment.length / itemsPerPage)
    return(
        <div>
            <h2>Comments</h2>
            <input type='text' placeholder='search...' onChange={(e) => setSearch(e.target.value)} />
            {currentData.map((item,index) => {
                return(
                    <div key={item.id}>
                        <div>
                            <h2>--------------------------</h2>
                        </div>
                        <div>
                            <h2>Name = {item.name}</h2>
                        </div>
                        <div>
                            <h2>Email = {item.email}</h2>
                        </div>
                        <div>
                            <h2>Body = {item.body}</h2>
                        </div>
                    </div>    
                )
            })}
            <button onClick={() => setCurrentPage(prev=>prev-1)} disabled={currentPage===1}>Prev</button>
            <span>Page : {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(prev=>prev+1)} disabled={currentPage===totalPages}>Next</button>
        </div>
    )
}