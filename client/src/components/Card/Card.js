import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/actions';

export default function Card(props) {
    const dispatch = useDispatch();
    const country = useSelector((state) => state.country)


    return (
        <>
            <div>
                <h1> soy el componente CARRRDSSS </h1>
                <h2>{country.name}</h2>
                <h2>{country.flag}</h2>
                <h2>{country.capital}</h2>
                <h2>{country.region}</h2>
                <h2>{country.subregion}</h2>
                <h2>{country.area}</h2>
                <h2>{country.population}</h2>

            </div>
        </>
    )
}