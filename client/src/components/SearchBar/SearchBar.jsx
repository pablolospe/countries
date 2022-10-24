import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../redux/actions/actions.js";
import style from "./SearchBar.module.css";

export default function SearchBar({ paginado }) {
  const [countryName, setCountryName] = useState("");
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    setCountryName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountryName(countryName));
    // paginado(1);
    setCountryName("");
  };
  
  const clearSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountryName(''));
    paginado(1);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <button  className={style.clear} onClick={clearSubmit} type="reset">
            Clear Filters
          </button>
        </div>

        <div className={style.box}>
          <form onSubmit={handlerSubmit}>
            <input
              className={style.searchbar}
              type="text"
              name="country"
              id="country"
              value={countryName}
              placeholder="Search..."
              onChange={handlerChange}
            />
            <button className={style.submitbutton} type="submit">
              Search Country
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
