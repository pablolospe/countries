import React from "react";


export default function Paginado({countriesPerPage,allCountries,currentPage,nextP,prevP}){
    const pageNumbers =[];


    for(let i=0; i<Math.ceil(allCountries/countriesPerPage);i++) {
        pageNumbers.push(i+1)

    }

    return (
        <ul>
           <button onClick={() => prevP()} >Previous</button>

          {
            pageNumbers?.map(n => {
              return (
                <a key={n}> <button onClick={() => currentPage(n)} > {n} </button> </a>
              )
            })
          }
            <button onClick={() => nextP()} >Next</button>
        </ul>
      )
    }
