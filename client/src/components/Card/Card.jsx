import React from 'react';
import {Link, Route} from 'react-router-dom'


export default function Card({id, name, flag, region}) {

    return (
        <>
            <div>
                <Link to={`/detail/${id}`}>
                <img src={flag} alt='acá va la imagen'/>
                <h3>{name}</h3>
                </Link>
                <h4>continent: {region}</h4>   
                <br/>
            </div>               
        </>
    )
}