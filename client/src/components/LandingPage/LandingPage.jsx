import React from "react";
import {Link} from 'react-router-dom'


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