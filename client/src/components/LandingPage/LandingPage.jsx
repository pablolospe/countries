import React from "react";
import {Link} from 'react-router-dom'
import style from './LandingPage.module.css'


export default function LandingPage (){
    return(
        <div>
            <h2>LANDING PAGE!!</h2>
            <Link to="/home">
            <button>ingresar</button>
            </Link>
           
        </div>
    )
}