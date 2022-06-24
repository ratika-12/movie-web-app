import React from "react";
import {useGlobalContext} from "./context";
import {logOutUser} from "./App";

const SearchForm = () => {
    const {query, setQuery, error} = useGlobalContext();

    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="head">
                <h2>search movies</h2>
                <button className="logout-button" onClick={(e) => logOutUser()}>Logout</button>
            </div>
            <input
                type="text "
                className="form-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {error.show && <div className="error">{error.msg}</div>}

        </form>
    );
};

export default SearchForm;
