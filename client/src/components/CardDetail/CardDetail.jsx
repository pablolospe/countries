import React, { useEffect, useParams } from "react";
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
    <>
      <div>
        {detail?.map((c) => (
          <div>
            <h1>{c.name}</h1>
            <img src={c.flag} alt="flag" />
            <p>{c.capital}</p>
            <p>{c.region}</p>
            <p>{c.subregion}</p>
            <p>Area: {c.area}</p>
            <p>Population: {c.population}</p>
          </div>
        ))}
      </div>
    
    </>
  );
}
