// import React from 'react'
// import {useEffect, useState} from 'react'
// import Card from '../Card/Card';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCountries, filterCountriesByRegion } from '../../redux/actions/actions';
// import Paginado from '../Paginado/Paginado';



// export default function Cards() {
//     const dispatch = useDispatch();
//     // const allCountries = useSelector((state) => state.countries)

//     useEffect(()=>{
//         dispatch(getAllCountries()
//         )}, [dispatch])

//     const allCountries = useSelector((state)=>state.countries)
//     const [currentPage,setCurrentPage] = useState(1);
//     const[countriesPerPage,setCountriesPerPage] = useState();
//     // const[countriesPerPage1,setCountriesPerPage1] =useState(9);
//     // agregar un paso mas...

//     const indexOfLastCountry = currentPage * countriesPerPage;
//     const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
//     const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry);
//     const numPage = Math.ceil(allCountries.length/countriesPerPage)
    
//     console.log(allCountries);
//         const paginado = (pageNumber) =>{
//             setCurrentPage(pageNumber)
//         }
    
//     useEffect(() => {
//         if(currentPage === 1) {
//                 return setCountriesPerPage(9)
//         }else {
//                 return setCountriesPerPage(10)
//         }
//             }, [currentPage])

//         function handlePrev() {
//         if(currentPage !== 1) setCurrentPage(currentPage - 1);
//         }

//         function handleNext() {
//         if(numPage !== currentPage) setCurrentPage(currentPage + 1);
//         }

//         function handleSelect(e){
//             dispatch(filterCountriesByRegion(e.target.value))
//         }
    

//     return (
//         <>
//             <Paginado
//             allCountries={allCountries.length}
//             countriesPerPage ={countriesPerPage}
//             currentPage={paginado}
//             nextP={handleNext}
//             prevP={handlePrev}
//             />
//             <div>
//                 <label name='abc'> Alphabetic Order:</label>
//                 <select name='abc'>
//                     <option value='asc'>A-Z</option>
//                     <option value='desc'>Z-A</option>
//                 </select>
//                 <label name='region'> Region:</label>
//                 <select name='region' onChange={(e)=>handleSelect(e)}>
//                     <option value='All'>All</option>
//                     <option value='Africa'>Africa</option>
//                     <option value='Asia'>Asia</option>
//                     <option value='Americas'>Americas</option>
//                     <option value='Europe'>Europe</option>
//                     <option value='Oceania'>Oceania</option>
//                 </select>
//                 <label name='population'> Population:</label>
//                 <select name='population'>
//                     <option value='asc'>More to Less</option>
//                     <option value='desc'>Less to More</option>
//                 </select>
//                 <label name='activity'> Activity:</label>
//                 <select name='activity'>
//                     <option value='activity'>Act1</option>
                    
//                 </select>
//             </div>
//             <div>
//                 {
//                     currentCountries?.map((c)=>(
//                         <Card
//                         key={c.id}
//                         id={c.id}
//                         name={c.name}
//                         flag={c.flag}
//                         region={c.region}                       
//                         /> 
//                     ))
//                 }
//             </div>
//         </>
//     )
// }