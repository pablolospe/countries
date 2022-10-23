import React from "react";
import style from './Activity.module.css'
import { useDispatch } from "react-redux";
import { deleteActivity } from "../../redux/actions/actions";


export default function Activity({
  id,
  name,
  difficulty,
  duration,
  season,
  countries,
}) 
{
  const dispatch = useDispatch()

  function handleDelete(e){
    e.preventDefault()
    dispatch(deleteActivity(id))
    console.log(id);
  }

  return (
    <>
      <div className={style.card} key={id}>
        <button onClick={(e)=>handleDelete(e)}>Delete Activity</button>
        <h3> Activity: {name}</h3>
        <p> Difficulty: {difficulty}</p>
        <p> Duration: {duration}</p>
        <p> Season: {season}</p>
        <div className={style.countries}>
          
          {countries.map((c) => (
            <div key={c.id}>
            <div >
              <p>{c.name}</p>
            </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
