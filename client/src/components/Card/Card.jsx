import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css';

export default function Card({ id, name, flag, region }) {
  return (
    <>
      <div  >
        <Link to={`/detail/${id}`}>
          <h3>{name}</h3>
          <p>({region})</p>
          <img className={style.flag} src={flag} alt="acá va la imagen" width='200' height='135'/>
        </Link>
        <br />
        <br />
      </div>
    </>
  );
}