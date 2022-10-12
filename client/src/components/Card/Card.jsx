import React from 'react';
import {Link} from 'react-router-dom'

export default function Card({name, flag, region}) {
    

    return (
        <>
            <div>
                <h2>name: {name}</h2>
                <img src={flag} alt='acá va la imagen'/>
                <h2>continent: {region}</h2>            
            </div>
        </>
    )
}