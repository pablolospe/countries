import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterCountriesByRegion,
  orderAlphabetically,
  getAllActivities,
  filterActivity
} from "../../redux/actions/actions";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import style from './Home.module.css'


export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const allCountries = useSelector((state) => state.currentCountries);
  const allActivities = useSelector((state) => state.activities);
  const [currentPage, setCurrentPage] = useState(9.99);
  const [countriesPerPage, setCountriesPerPage] = useState();
  const [order, setOrder] = useState();

  const activitiesNames = allActivities.map(e=> e.name)
  const activitiesNotRepeated = activitiesNames.filter((act, index)=>{
    return activitiesNames.indexOf(act) === index 
  })

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  
  const currentCountries = currentPage===1?allCountries.slice(0,9):
    currentPage===26?allCountries.slice(249,allCountries.length):
    allCountries.slice(indexOfFirstCountry,indexOfLastCountry);

  const numPage = Math.ceil(allCountries.length / countriesPerPage);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (currentPage === 1) {
      return setCountriesPerPage(9);
    } else {
      return setCountriesPerPage(10);
    }
  }, [currentPage]);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  function handlePrev() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    if (numPage !== currentPage) setCurrentPage(currentPage + 1);
  }

  function handleSelect(e) {
    dispatch(filterCountriesByRegion(e.target.value));
    paginado(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderAlphabetically(e.target.value));
    paginado(1);
    setOrder(e.target.value);
  }

  function handleActivity(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
    paginado(1);
  }


  return (
    <>
      <div className={style.filters}>
        
        <div>
          <label name="order by">  Order:</label>
          <select name="abc" onChange={(e) => handleSort(e)}>
            <option > Oreder by... </option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
            <option value="more">More to Less</option>
            <option value="less">Less to More</option>  
          </select>
        </div>

        <div>
          <label name="region">  Region:</label>
          <select name="region" onChange={(e) => handleSelect(e)}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>

        <div>
          <label name="activity">  Activity:</label>
          <select onChange={handleActivity} name="activity">
          <option value='unfiltered' > Select an activity  </option>
            {allActivities.map((ac) => (
              <option key={ac.id} value={ac.name}>
                {ac.name}
              </option>
            ))}
          </select>
        </div>

        <div >
          <SearchBar 
          paginado={paginado}
          />
        </div>

      </div>
      
      <div className={style.paginado}>
        <Paginado
          allCountries={allCountries.length}
          countriesPerPage={countriesPerPage}
          currentPage={paginado}
          nextP={handleNext}
          prevP={handlePrev}
          />
      </div>

      <div className={style.grid}>
        {currentCountries?.map((c) => (
          <div className={style.card}>
          <Card
            key={c.id}
            id={c.id}
            name={c.name}
            flag={c.flag}
            region={c.region}
          />
          </div>
        ))}
      </div>
    </>
  );
}




// const mapAllActivities = allActivities.map(e=>e.name)
// const uniqueActivities = mapAllActivities.filter((item,index)=>{
//   return mapAllActivities.indexOf(item) === index;
// })