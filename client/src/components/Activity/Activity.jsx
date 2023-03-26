import React from "react";
import style from './Activity.module.css'
import { useDispatch } from "react-redux";
import { deleteActivity } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

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
  }

  return (
    <>
      <div className={style.card} key={id}>
        <button className={style.button} 
                onClick={(e)=>handleDelete(e)}>
                  Delete Activity</button>
        <h2> {name}</h2>
        <p> Difficulty: {difficulty}</p>
        <p> Duration: {duration}</p>
        <p> Season: {season}</p>
        <p> Activity Id: {id}</p>
        <div className={style.countries}>
          
          {countries.map((c) => (
            <div key={c.id}>
            <div >
            <Link to={`/detail/${c.id}`}>
              <p className={style.link}>{c.name}</p>
              </Link>
            </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
