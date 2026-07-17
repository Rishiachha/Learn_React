//Search helps users find specific data from a large collection.
import { useState } from "react";
export const Search = () => {
    //useState stores the current text typed inside the input box.
    //Initially the input is empty.
    const [search, setSearch] = useState("");
    //This is the data we want to search from.
    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Grapes",
    "Pineapple",
        "Watermelon",
        "Papaya",
        "Kiwi",
        "Strawberry",
        "Blueberry",
        "Cherry",
        "Peach",
        "Pear",
        "Plum",
        "Guava",
        "Pomegranate",
        "Dragon Fruit",
        "Lychee",
        "Coconut"
    ];
    const filteredFruits = fruits.filter((fruit) =>fruit.toLowerCase().includes(search.toLowerCase())
    /*
    filter() Goes through every fruit.includes() Checks whether the fruit contains the text typed by the user.toLowerCase()
     Makes search case insensitive.
    */
    );
    return (
        <div>
            <h1>Fruit Search</h1>
            <input
                type="text"
                placeholder="Search Fruit"
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)

                }
            />
            {
                filteredFruits.map((fruit, index) => (
                    <h3 key={index}>
                        {fruit}
                    </h3>
                ))
            }
        </div>
    );
};