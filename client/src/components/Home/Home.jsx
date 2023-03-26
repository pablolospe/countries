import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterCountriesByRegion,
  sort,
  getAllActivities,
  filterActivity
} from "../../redux/actions/actions";
import Card from "../Card/Card";
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
  // const [order, setOrder] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9.99);
  
  const [activ, setActiv]= useState({
    1:true
  })

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  
  const currentCountries = currentPage===1?allCountries.slice(0,9):
    currentPage===26?allCountries.slice(249,allCountries.length):
    allCountries.slice(indexOfFirstCountry,indexOfLastCountry);

  const numOfLastPage = Math.ceil(allCountries.length / countriesPerPage);
  
  const activitiesNames = allActivities.map(e=> e.name)
  const activitiesNotRepeated = activitiesNames.filter((act, index)=>{
    return activitiesNames.indexOf(act) === index;
  })

  const paginado = function(pageNumber) {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
      return setCountriesPerPage(9.99);
  }, [currentPage, dispatch]);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  function handlePrev() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    if (numOfLastPage !== currentPage) setCurrentPage(currentPage + 1);
  }

  function handleSelect(e) {
    e.preventDefault();
    document.getElementById("order").getElementsByTagName('option')[0].selected = 'Order by...'
    dispatch(filterCountriesByRegion(e.target.value));
    paginadoActiv()
    paginado(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(sort(e.target.value));
    // setOrder(e.target.value);
    paginadoActiv()
    paginado(1);
  }

  function handleActivity(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
    paginadoActiv()
    paginado(1);
  }
  const paginadoActiv=(value = 1) => {
      const clicked = value;
      setActiv({
          [clicked]: true,
      });
  };
  

  return (
    <>
    <div className={style.container}>
      <div className={style.filters}>
        <div>
          <label name="order by">  Order</label>
          <select id="order" name="abc" onChange={(e) => handleSort(e)}>
            <option > Order by... </option>
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
            <option value="more">More to Less Population</option>
            <option value="less">Less to More Population</option>  
          </select>
        </div>

        <div>
          <label name="region">  Region</label>
          <select id="region" name="region" onChange={(e) => handleSelect(e)}>
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
          <label name="activity">  Activity</label>
          <select id="activity" onChange={handleActivity} name="activity">
          <option value='unfiltered' > Select an activity  </option>
            {activitiesNotRepeated?.map((ac) => (
              <option key={ac} value={ac}>
                {ac}
              </option>
            ))}
          </select>
        </div>

      </div>

        <div className={style.searchbar}>
          <SearchBar 
          paginadoActiv={paginadoActiv}
          paginado={paginado}
          currentPage={currentPage}
          />
        </div>

      <div className={style.paginado}>
        <Paginado
          activ={activ}
          setActiv={setActiv}
          allCountriesLength={allCountries.length}
          countriesPerPage={countriesPerPage}
          paginado={paginado}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          nextP={handleNext}
          prevP={handlePrev}
          />
      </div>

      <div className={style.cards}>
        {
        !currentCountries.length?
        <h1 className={style.warning}>Country Not Found</h1>
        :currentCountries.map((c) => (
          <div key={c.id} className={style.card}>
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
      </div>
    </>
  );
}
