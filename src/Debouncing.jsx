//Debouncing is a technique used to delay a function call until the user stops performing an action for a certain amount of time.
//Instead of running a function on every key press, we wait for a small delay (like 500ms) after the user stops typing.
import { useState, useEffect } from "react";
export const Debouncing = () => {
    /*
    Stores what the user is typing.
    */
    const [search, setSearch] = useState("");
    /*
    Stores the debounced value.This updates only after the user stops typing.
    */
    const [debouncedSearch, setDebouncedSearch] = useState("");
    /*
    useEffect runs whenever
    search changes.
    */
    useEffect(() => {
        /*
        Start a timer.After 500ms, update debouncedSearch.
        */
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);
        /*
        Cleanup Function : If user types again before 500ms, remove the previous timer.This is the secret behind Debouncing.
        */
        return () => {clearTimeout(timer);
        };
    }, [search]);
    return (
        <div>
            <h1>Debouncing Example</h1>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) =>setSearch(e.target.value)}
            />
            <h2>Debounced Value :{debouncedSearch}</h2>
        </div>
    );
};