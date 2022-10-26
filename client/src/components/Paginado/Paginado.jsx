import React from "react";
import style from "./Paginado.module.css";

export default function Paginado({
  countriesPerPage,
  allCountriesLength,
  currentPage,
  setCurrentPage,
  numPage,
  paginado,
  activ,
  setActiv,
}) {
  const pageNumbers = [];

  const handlerClick = (event, n) => {
    paginado(n);
    setActiv({
      [event.target.name]: true,
    });
  };

  function handlePrev(event) {
    event.preventDefault();
    setActiv({
      [currentPage - 1]: true,
    });
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }

  function handleNext(event) {
    event.preventDefault();
    setActiv({
      [currentPage + 1]: true,
    });
    if (numPage !== currentPage) setCurrentPage(currentPage + 1);
  }

  for (let i = 0; i < Math.ceil(allCountriesLength / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <ul>
      <button
        disabled={!allCountriesLength || currentPage === 1}
        className={style.prevnext}
        onClick={(event) => handlePrev(event)}
      >
        Prev
      </button>

      {pageNumbers?.map((n) => {
        return (
          <button
            className={activ[n] ? style.pagActual : style.pagOther}
            name={n}
            key={n}
            onClick={(event) => handlerClick(event, n)}
          >
            {n}
          </button>
        );
      })}
      <button
        disabled={
          !allCountriesLength ||
          currentPage === Math.ceil(allCountriesLength / countriesPerPage)
        }
        className={style.prevnext}
        onClick={(event) => handleNext(event)}
      >
        Next
      </button>
    </ul>
  );
}
