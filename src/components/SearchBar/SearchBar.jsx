import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search your favourite food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;