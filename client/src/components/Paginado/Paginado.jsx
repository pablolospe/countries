import React from "react";
import style from './Paginado.module.css'



export default function Paginado({countriesPerPage,allCountries,currentPage,nextP,prevP}){
    const pageNumbers =[];

    for(let i=0; i<Math.ceil(allCountries/countriesPerPage);i++) {
        pageNumbers.push(i+1)
    }

    return (
        <ul>
           <button className={style.prevnext} onClick={() => prevP()} >Prev</button>

          {
            pageNumbers?.map(n => {
              
              return (

                <button className={n === currentPage ? style.pagActual : style.pagOther} key={n} onClick={()=>currentPage(n)}> {n} </button>
              )
            })
          }
            <button className={style.prevnext} onClick={() => nextP()} >Next</button>
        </ul>
      )
    }


    // className={n === currentPage(n) ? style.pagActual : style.pagOther}