import React from 'react'
import {useEffect} from 'react'
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/actions';




export default function Cards() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)

    useEffect(()=>{
        dispatch(getAllCountries()
        )}, [dispatch])

    return (
        <>
            <div>
                {
                    allCountries?.map((c)=>(
                        <Card
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        flag={c.flag}
                        region={c.region}                       
                        /> 
                    ))
                }
            </div>
        </>
    )
}