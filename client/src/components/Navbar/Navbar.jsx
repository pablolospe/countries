import React from "react";
import {Link} from "react-router-dom"



export default function Navbar(){
    return(
        <>
        <div>
            <ul>
                <li><Link to="/home" > Home </Link></li>
                <li><Link to="/activities"> Activities </Link></li>
                <li><Link to="/home/form"> Create Activity </Link></li>
                <li><Link to="/home/about"> About </Link></li>
            </ul>
        </div>
        <br/>
        </>
    )
}

