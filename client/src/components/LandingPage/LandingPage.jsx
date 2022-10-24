import React from "react";
import {Link} from 'react-router-dom'
import style from './LandingPage.module.css'


export default function LandingPage (){
    return(
        <div className={style.landing}>
            {/* <h2>LANDING PAGE!!</h2> */}
            <Link to="/home">
            <button className={style.button}>ingresar</button>
            </Link>
           
        </div>
    )
}