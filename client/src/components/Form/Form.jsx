import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions/actions";
import { useHistory } from "react-router-dom";

function validate(input){
  let errors = {}
  if(!input.name){
    errors.name= 'activity name is required';
  } else if (!input.country){
    errors.country= 'country is required'
  } else if (!input.difficulty){
    errors.difficulty= 'difficulty is required'
  } else if (!input.duration){
    errors.duration= 'duration is required'
  } else if (!input.season){
    errors.season= 'season is required'
  }
  return errors
}

export default function Form(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCountries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({})
  
  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
    allCountries: [],
  });

  useEffect(()=>{
    dispatch(getAllCountries()
    )}, [dispatch])
   
  function changeHandler(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value,
    }))
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    let newActiv = dispatch(createActivity(input)).payload;
    alert('New Activity Created')
    axios.post("http://localhost:3001/activities", newActiv);
    setInput({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      countries: [],
    });
    history.push('/home')
    // window.location.reload(false)
  };
  
    function handleSelected(e){
      setInput({
        ...input,
        countries:[...input.countries, e.target.value]//OJO CON EL SET
      })
    }

    function handleDelete(el){
      setInput({
        ...input,
        countries: input.countries.filter(country=> country !== el)
      })
    }

  return (
    <>
    <form onSubmit={e=>submitHandler(e)}>
      <div>
          <label name="name">Activity:</label>
          <input
            key="name"
            type="text"
            value={input.name}
            name="name"
            onChange={e=>changeHandler(e)}
          />
          {errors.name && (
            <p className="error">{errors.name} </p>
          )}
          <br /><br />
      </div>

      <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <select name="difficulty" onChange={e=>changeHandler(e)}>
            <option value=""> </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.difficulty && (
            <p className="error">{errors.difficulty} </p>
          )}
          <br /><br />
      </div>

      <div>
          <label htmlFor="duration">Duration: </label>
          <select name="duration" onChange={e=>changeHandler(e)}>
            <option value=""></option>
            <option value="1">1 Hr.</option>
            <option value="2">2 Hs.</option>
            <option value="3">3 Hs.</option>
            <option value="4">4 Hs.</option>
            <option value="5">5 Hs.</option>
            <option value="6">6 Hs.</option>
            <option value="7">7 Hs.</option>
            <option value="8">8 Hs.</option>
            <option value="9">9 Hs.</option>
          </select>
          {errors.duration && (
            <p className="error">{errors.duration} </p>
          )}
          <br /><br />
      </div>

      <div>
          <label htmlFor="season">Season: </label>
          <select name="season" onChange={e=>changeHandler(e)}>
            <option value=""></option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
          {errors.season && (
            <p className="error">{errors.season} </p>
          )}
          <br /><br />
      </div>
      

      <div>
          <ul>
            <div >{input.countries.map(el=>
            <div> 
            <li key={el.id} name={el} > {el} </li>
            <button  onClick={()=>handleDelete(el)}>x</button>
            </div>
            
            )}</div>
          </ul>

          
          <label>Country</label>
          <select onChange={handleSelected} name="country">
          <option onChange={handleSelected} >Choose...</option>
            {allCountries.map((c) => (
              <option key={c.id}>{c.name}</option>
            ))}
          </select>
          {errors.name && (<p className="error">{errors.country} </p>)}
          <br /><br />
      </div>

      <div>
          <br />
          <button type="submit"
          disabled={!input.name || !input.difficulty || !input.duration || !input.season }>
            CREATE
          </button>
      </div>
    </form>
    </>
  );
}



// <div>
// <ul><li >{input.countries.map(el=>el + ' ,')}</li></ul>
// <label>Country</label>
// <select onChange={handleSelected} name="country">
//   <option onChange={handleSelected} >Choose...</option>
//   {allCountries.map((c) => (
//     <option key={c.name} value={c.name}>{c.name}</option>
//   ))}
// </select>
// <br />
// <br />
// <button type="submit">CREATE</button>
// </div>