import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions/actions";
import style from './CardDetail.module.css'

export default function CardDetail(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const detail = useSelector((state) => state.countryDetail);
  const history = useHistory();

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <button onClick={()=>history.goBack()}>BACK</button>
      {
      detail?.map((c) => (
          <div key={c.id} className={style.carddetail}>
            <div>  
              <h1>{c.name}</h1>
              <img className={style.flag} src={c.flag} alt='flag' />
            </div>
            <div> 
              <p>ID: {c.id}</p>
              <p>Capital City: {c.capital}</p>
              <p>Continent: {c.region}</p>
              <p>Sub-Region: {c.subregion}</p>
              <p>Area: {c.area.toLocaleString()} km²</p>
              <p>Population: {c.population.toLocaleString()}</p>
              <br/>
            </div>
          <div>

          <div >
            <ul className={style.activities}>
            {c.activities?.map((ac) => (
              <div key={ac.id}>
              <li className={style.card} >
                <p>You can {ac.name} in {ac.season}</p>
                <p>difficulty: {ac.difficulty}</p>
                <p>duration: {ac.duration}</p>
              </li>
              </div>
            ))}
            </ul>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
