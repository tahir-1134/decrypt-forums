import React, { useState } from "react";
import "./SearchBox.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox() {
    const [input,setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if(!input) return; 

    }



  return (
    <form className="searchBox" onSubmit={handleSearch}>
      <input type="text" placeholder="Search Keywords" value={input} onChange={(e)=>(setInput(e.target.value))}/>
      <button disabled={!input} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBox;
