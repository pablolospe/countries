import React from "react";
import style from './Paginado.module.css'
import { useState } from "react";



export default function Paginado({countriesPerPage,allCountries,currentPage,nextP,prevP, setCurrentPage, numPage, paginado}){
    const pageNumbers =[];

    const [activ, setActiv]= useState({
      1:true
    })

    const handlerClick = (event, n)=>{
      paginado(n);
      setActiv({
        [event.target.name]:true
      })
    }

    function handlePrev(event) {
      event.preventDefault();
      setActiv({
        [currentPage-1]:true
      })
      if (currentPage !== 1) setCurrentPage(currentPage - 1);
    }
  
    function handleNext(event) {
      event.preventDefault();
      setActiv({
        [currentPage+1]:true
      })
      if (numPage !== currentPage) setCurrentPage(currentPage + 1);
    }

    
    for(let i=0; i<Math.ceil(allCountries/countriesPerPage);i++) {
        pageNumbers.push(i+1)
    }

    return (
        <ul>
           <button disabled={!allCountries||currentPage===1} className={style.prevnext} onClick={(event) => handlePrev(event)}>Prev</button>

          {
            pageNumbers?.map(n => {
              
              return (
                <button className={activ[n] ? style.pagActual : style.pagOther} name={n} key={n} onClick={(event)=>handlerClick( event,n)}> {n} </button>
              )
            })
          }
            <button disabled={!allCountries || (currentPage === Math.ceil(allCountries/countriesPerPage))} className={style.prevnext} onClick={(event) => handleNext(event)} >Next</button>
        </ul>
      )
    }


    // className={n === currentPage(n) ? style.pagActual : style.pagOther}