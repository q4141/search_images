import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    
      <form onSubmit={handleFormSubmit}>
        <div className="InputContainer">
          <input value={term} className="input" onChange={handleChange} />
        </div>
      </form>
    
  );
}

export default SearchBar;
