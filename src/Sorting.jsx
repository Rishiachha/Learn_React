import { useState } from "react";
/*
Sorting:Sorting arranges data in a particular order.Here we sort numbers.
*/
export const Sorting = () => {
    /*
    Store numbers in state.We use state because whenever numbers change,React should re-render.
    */

    const [numbers, setNumbers] = useState([
        40,
        10,
        70,
        20,
        90,
        60
    ]);
    const sortAscending = () => {
        /*
        Never sort the state directly.[...numbers] creates a copy.
        */
        const sorted = [...numbers].sort(
            (a, b) => a - b
        );
        setNumbers(sorted);
    };
    const sortDescending = () => {
        const sorted = [...numbers].sort(
            (a, b) => b - a
        );
        setNumbers(sorted);
    };
    return (
        <div>
            <h1>Number Sorting</h1>
            <button onClick={sortAscending}>
                Ascending
            </button>
            <button onClick={sortDescending}>
                Descending
            </button>
            {
                numbers.map((number, index) => (
                    <h3 key={index}>
                        {number}
                     </h3>
                ))
            }
        </div>
    );
};