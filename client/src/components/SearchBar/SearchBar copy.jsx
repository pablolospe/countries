import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions/actions";

export default function SearchBar(props) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    // e.preventDefault()
    setName(e.target.value);
    console.log(name);
  };

  function handleSubmit (e) {
    e.preventDefault()
    dispatch(getAllCountries(name));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search country"
        
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
      
    </div>
  );
}
