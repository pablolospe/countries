import React from "react";
import style from './Activity.module.css'

export default function Activity({
  id,
  name,
  difficulty,
  duration,
  season,
  countries,
}) {
  return (
    <>
      <div className={style.card} key={id}>
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

        <br />
        <br />
      </div>
    </>
  );
}
