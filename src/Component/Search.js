import React from "react";

function Search({ searchInput, setSearchInput }) {
    //using state for use search
    // const [searchInput, setSearchInput] = useState("");
    //for change effected in the DOM
    const handleChanger = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }




    return (
        <form className="d-flex" onInput={handleChanger}>
            <input onInput={(event) => { setSearchInput(event.target.value) }} value={searchInput} type='text' />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>)
    // }
}

export default Search;