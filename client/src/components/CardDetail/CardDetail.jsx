import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCountryDetail, cleanDetail } from "../../redux/actions/actions";
import style from './CardDetail.module.css'


export default function CardDetail(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const detail = useSelector((state) => state.countryDetail);
  const history = useHistory();

  useEffect(() => {
    dispatch(getCountryDetail(id));
    return()=>{dispatch(cleanDetail())}
  }, [dispatch, id]);

  return (
    <div>
      <button className={style.back} onClick={()=>history.goBack()}>BACK</button>
      {
        detail?.map((c, pos) => (
          <div key={pos} >
            <h1 className={style.h1}>{c.name}</h1>
            <div className={style.carddetail} >
              <div>  
                <img className={style.flag} src={c.flag} alt='flag' />
              </div>
              <div> 
                <p>ID: {c.id}</p>
                <p>Capital City: {c.capital}</p>
                <p>Continent: {c.region}</p>
                <p>Sub-Region: {c.subregion}</p>
                <p>Area: {c.area.toLocaleString()} km²</p>
                <p>Population: {c.population.toLocaleString()}</p>
              </div>
            </div>
          <div>

          <div >
            <div>{c.activities.length? (<h3 className={style.h3}>Activities:</h3>):(<></>)}
            </div>
            <ul className={style.activities}>
            {c.activities?.map((ac, pos) => (
              <div key={pos}>
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
