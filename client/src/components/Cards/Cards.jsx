import React from 'react'
import {useEffect} from 'react'
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
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
        <div><br/><SearchBar/><br/></div>


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