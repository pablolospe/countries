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
      {
      detail?.map((c) => (
        <div>
          <button onClick={()=>history.goBack()}>BACK</button>
          <h1>{c.name}</h1>
          <img className={style.flag} src={c.flag} alt='flag' />
          <p>ID: {c.id}</p>
          <p>Capital City: {c.capital}</p>
          <p>Continent: {c.region}</p>
          <p>Sub-Region: {c.subregion}</p>
          <p>Area: {c.area.toLocaleString()} km²</p>
          <p>Population: {c.population.toLocaleString()}</p>
          <br/>
          <div>
          Activities:
          <ul>
          {c.activities?.map((ac) => (
            <li className={style.card} key={ac.id}>
              <p>You can {ac.name} in {ac.season}</p>
              <p>difficulty: {ac.difficulty}</p>
              <p>duration: {ac.duration}</p>
            </li>
          ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
