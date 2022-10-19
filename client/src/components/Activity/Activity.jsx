import React from "react";

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
      <div key={id}>
        <h3> Activity: {name}</h3>
        <p> Difficulty: {difficulty}</p>
        <p> Duration: {duration}</p>
        <p> Season: {season}</p>
        <ul>
          {countries.map((c) => (
            <li key={c.id}>
              <p>{c.name}</p>
            </li>
          ))}
        </ul>

        <br />
        <br />
      </div>
    </>
  );
}
