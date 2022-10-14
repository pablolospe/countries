import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions/actions";

export default function Form(props) {
  const allCountries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAllCountries()
    )}, [dispatch])
  
  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
    allCountries: [],
  });
   
  function changeHandler(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    
    let newActiv = dispatch(createActivity(input)).payload;
    axios.post("http://localhost:3001/activities", newActiv);
    setInput({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      countries: [],
    });
  };
  
    function handleSelected(e){
      setInput({
        ...input,
        countries:[...new Set([...input.countries, e.target.value])]
      })
    }

  return (
    <>
      <div>
        <form onSubmit={e=>submitHandler(e)}>
          <label htmlFor="name">Activity:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={e=>changeHandler(e)}
          ></input>
          <br />
          <br />
          <label htmlFor="difficulty">Difficulty:</label>
          <select name="difficulty" onChange={e=>changeHandler(e)}>
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <br />
          <label htmlFor="duration">Duration: </label>
          <select name="duration" onChange={e=>changeHandler(e)}>
            <option value="1">1 Hs.</option>
            <option value="2">2 Hs.</option>
            <option value="3">3 Hs.</option>
            <option value="4">4 Hs.</option>
            <option value="5">5 Hs.</option>
            <option value="6">6 Hs.</option>
            <option value="7">7 Hs.</option>
            <option value="8">8 Hs.</option>
            <option value="9">9 Hs.</option>
          </select>
          <br />
          <br />
          <label htmlFor="season">Season: </label>
          <select name="season" onChange={e=>changeHandler(e)}>
            <option value="">-----</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
          <br />
          <br />
          
            <ul><li >{input.countries.map(el=>el + ' ,')}</li></ul>
          <label>Country</label>
          <select onChange={handleSelected} name="country">
            <option onChange={handleSelected} >Choose...</option>
            {allCountries.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        
         {/* <div>
                    <label>Countries: </label>
                    <select name="countries" onChange={handleSelected} multiple={false}>
                        <option >Select one or more countries</option>
                        {allCountries.map(country => 
                            <option key={country.id} value={country.name}>{country.name}</option>)}
                    </select>
                </div> */}

          <br />
          <br />
          <button type="submit">CREATE</button>
        </form>
      </div>
    </>
  );
}
