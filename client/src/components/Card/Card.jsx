import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css';

export default function Card({ id, name, flag, region }) {
  return (
    <>
      <div className={style.card} >
        <Link to={`/detail/${id}`}>
          {/* <p>{region}</p> */}
          <div className={style.flagcase}>
          <img className={style.flag} src={flag} alt="acá va la imagen" width='200' height='135'/>
          </div>
          <div className={style.title}>
            <h5>{name}</h5>
            <h6>( {region} )</h6>
          </div>
        </Link>
        
      </div>
    </>
  );
}