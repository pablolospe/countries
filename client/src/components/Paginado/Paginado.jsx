import React from "react";


export default function Paginado({countriesPerPage,allCountries,currentPage,nextP,prevP}){
    const pageNumbers =[];


    for(let i=0; i<Math.ceil(allCountries/countriesPerPage);i++) {
        pageNumbers.push(i+1)

    }

    return (
        <ul>
           <button onClick={() => prevP()} >Prev</button>

          {
            pageNumbers?.slice(0,26).map(n => {
              return (
                <button key={n} onClick={() => currentPage(n)} > {n} </button>
              )
            })
          }
            <button onClick={() => nextP()} >Next</button>
        </ul>
      )
    }
