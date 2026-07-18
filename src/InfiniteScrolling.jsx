/*
Infinite Scroll loads more data automatically when user reaches the bottom of the page.
*/
import { useEffect, useState } from "react";
export const InfiniteScrolling = () => {
    /*
    Stores all posts
    */
    const [posts, setPosts] = useState([]);
    /*
    Controls which pageshould be fetched
    */
    const [page, setPage] = useState(1);
    /*
    useEffect runs whenever page changes.Initially page = 1 Later page increases when user scrolls.
    */
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        .then(response => response.json())
        .then(data => {
            /*
            Add new posts to old posts instead of replacing them.
            */
            setPosts(previous => [
                ...previous,
                ...data
            ]);
        });
    }, [page]);
    /*
    Detect scrolling
    */
    const handleScroll = () => {
        /*
        window.innerHeight= Screen height
        window.scrollY= Current scroll position
        document.documentElement.scrollHeight = Total page height
        */
        if(window.innerHeight + window.scrollY >=document.documentElement.scrollHeight){
            /*
            User reached bottom
            Load next page
            */
            setPage(previous => previous + 1);
        }
    };
    /*
    Add scroll event listener
    */
    useEffect(()=>{
        window.addEventListener(
            "scroll",
            handleScroll
        );
        /*
        Cleanup
        Remove listener when
        component unmounts.
        */
        return ()=>{
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    },[]);
    return(
        <div>
            <h1>Infinite Scroll</h1>
            {
                posts.map(post=>(
                    <div key={post.id}>
                        <h3>
                            {post.title}
                        </h3>
                    </div>
                ))
            }
        </div>
    )
}