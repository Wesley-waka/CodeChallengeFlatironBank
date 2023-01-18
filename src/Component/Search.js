import React from "react";

function Search({ search, setSearchString }) {
    //using state for use search
    // const [searchInput, setSearchInput] = useState("");
    //for change effected in the DOM
    const handleChanger = (e) => {
        e.preventDefault();
        setSearchString(e.target.value)
    }




    return (
        <form className="d-flex" onInput={handleChanger}>
            <input onInput={(event) => { setSearchString(event.target.value) }} value={search} type='text' />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>)
    // }
}

export default Search;