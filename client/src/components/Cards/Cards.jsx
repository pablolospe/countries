import React from 'react'
import {useEffect, useState} from 'react'
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/actions';
import Paginado from '../Paginado/Paginado';




export default function Cards() {
    const dispatch = useDispatch();
    // const allCountries = useSelector((state) => state.countries)

    useEffect(()=>{
        dispatch(getAllCountries()
        )}, [dispatch])

        const allCountries = useSelector((state)=>state.countries)
        const [currentPage,setCurrentPage] = useState(1);
        const[countriesPerPage,setCountriesPerPage] =useState(9);
        const[countriesPerPage1,setCountriesPerPage1] =useState(9);
        const indexOfLastCountry = currentPage * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry);
        const numPage = Math.ceil(allCountries.length/countriesPerPage)
    
    
        const paginado = (pageNumber) =>{
            setCurrentPage(pageNumber)
        }
    
        useEffect(() => {
            if(currentPage === 1) {
                 return setCountriesPerPage(9)
            }else {
                 return setCountriesPerPage(10)
            }
                }, [currentPage])
    
          function handlePrev() {
            if(currentPage !== 1) setCurrentPage(currentPage - 1);
            }
    
          function handleNext() {
            if(numPage !== currentPage) setCurrentPage(currentPage + 1);
        }
    

    return (
        <>
<Paginado
            allCountries={allCountries.length}
            countriesPerPage ={9}
            currentPage={paginado}
            nextP={handleNext}
            prevP={handlePrev}
            />

            <div>
                {
                    currentCountries?.map((c)=>(
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