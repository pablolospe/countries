import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import {Link} from "react-router-dom"



const Navbar = () => {
    return(
        <>
        <div>
            <ul>
                <li><Link to="/home" > Home </Link></li>
                <li><Link to="/home/form"> Create Activity </Link></li>
                <li><Link to="/home/about"> About </Link></li>
                <li><SearchBar /></li>
            </ul>
        </div>
        <br/>
        </>
    )
}

export default Navbar