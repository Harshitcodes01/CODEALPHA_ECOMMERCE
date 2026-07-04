import "./SearchBar.css";

function SearchBar({
    value,
    onChange,
}) {

    return (

        <input
            className="search-bar"
            placeholder="Search products..."
            value={value}
            onChange={onChange}
        />

    );

}

export default SearchBar;