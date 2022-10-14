import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../../redux/actions/actions";

export default function CardDetail(props) {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const detail = useSelector((state) => state.countryDetail);
  

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {detail?.map((c) => (
        <div>
          <h1>{c.name}</h1>
          <img src={c.flag} alt='flag' />
          <p>ID: {c.id}</p>
          <p>Capital City: {c.capital}</p>
          <p>Continent: {c.region}</p>
          <p>Sub-Region: {c.subregion}</p>
          <p>Area: {c.area} km²</p>
          <p>Population: {c.population}</p>
          <br/>
          <div>
          Activities:
          {c.activities?.map((ac) => (
            <div key={ac.id}>
              <p>{ac.name}</p>
              <p>difficulty: {ac.difficulty}</p>
              <p>duration: {ac.duration}</p>
              <p>season: {ac.season}</p>
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/*


*/
