import { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";
const SearchBox = () => {
    const { setSearch } = useContext(UserContext);
    //instead of passing setSearch as a prop, we access it directly using Context.
    //useRefStores the Search Input.
    //React does NOT control this input.
    //This is an Uncontrolled Component.

    const searchRef = useRef();
    //Creates a reference to the input element.
    //Search Employee : Reads the value directly from DOM using useRef.
    function searchEmployee() {
        setSearch(searchRef.current.value);
    }
    return (
        <div>
            <h2>Search Employee</h2>
            <input
                type="text" placeholder="Search Employee" ref={searchRef} onChange={searchEmployee}
            />
        </div>
    );
}
export default SearchBox;