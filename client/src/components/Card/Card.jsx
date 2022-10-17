import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, flag, region }) {
  return (
    <>
      <div>
        <Link to={`/detail/${id}`}>
          <h3>{name}</h3>
          <p>{region}</p>
          <img src={flag} alt="acá va la imagen" />
        </Link>
        <br />
      </div>
    </>
  );
}
