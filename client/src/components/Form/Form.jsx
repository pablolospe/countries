import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions/actions";
import style from "./Form.module.css";

function validate(input) {
  let errors = {};
  if (!input.name || /[^a-zA-Z, ]/g.test(input.name)) {
    errors.name = "activity name is not valid";
  } else if (!input.difficulty) {
    errors.difficulty = "difficulty is required";
  } else if (!input.duration) {
    errors.duration = "duration is required";
  } else if (!input.season) {
    errors.season = "season is required";
  } else if (!input.countries.length) {
    errors.countries = "at least one country is required";
  }
  return errors;
}

export default function Form(props) {
  const dispatch = useDispatch();
  // const history = useHistory();
  const allCountries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function changeHandler(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createActivity(input));
    window.location.reload(false);
  };

  function handleSelected(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== el),
    });
  }

  return (
    <>
      <div className={style.formulario}>
        <form onSubmit={(event) => submitHandler(event)}>
          <div className={style.container}>
            <div className={style.margin}>
              <label name="name">Activity</label>
              <input
                key="name"
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => changeHandler(e)}
              />
              {errors.name && <p className={style.error}>{errors.name} </p>}
            </div>

            <div className={style.margin}>
              <label name="difficulty">Difficulty</label>
              <select name="difficulty" onChange={(e) => changeHandler(e)}>
                <option value=""> </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.difficulty && (
                <p className={style.error}>{errors.difficulty} </p>
              )}
            </div>

            <div className={style.margin}>
              <label name="duration">Duration</label>
              <select name="duration" onChange={(e) => changeHandler(e)}>
                <option value=""></option>
                <option value="1">1 Hr.</option>
                <option value="2">2 Hs.</option>
                <option value="3">3 Hs.</option>
                <option value="4">4 Hs.</option>
                <option value="5">5 Hs.</option>
                <option value="6">6 Hs.</option>
                <option value="7">7 Hs.</option>
                <option value="8">8 Hs.</option>
                <option value="9">9 Hs.</option>
              </select>
              {errors.duration && (
                <p className={style.error}>{errors.duration} </p>
              )}
            </div>

            <div className={style.margin}>
              <label name="season">Season: </label>
              <select name="season" onChange={(e) => changeHandler(e)}>
                <option value=""></option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
              </select>
              {errors.season && <p className={style.error}>{errors.season} </p>}
            </div>

            <div className={style.margin}>
              <label>Country</label>
              <select onChange={handleSelected} name="country">
                <option onChange={handleSelected}>Choose...</option>
                {allCountries?.map((c, pos) => (
                  <option key={pos}>{c.name}</option>
                ))}
              </select>
              {/* {errors.countries && (<p className={style.error}>{errors.countries} </p>)} */}
            </div>

            <div>
              <button className={style.submitbtn}
                type="submit"
                disabled={
                  !input.name ||
                  errors.name ||
                  errors.difficulty ||
                  errors.duration ||
                  errors.season ||
                  input.countries.length < 1
                }
                      >CREATE</button>
            </div>
            {input.countries.map((el, pos) => (
              <div className={style.countrydiv} key={pos}>
                <div>
                  <p className={style.countryname}>{el}</p>
                </div>

                <div>
                  <button
                    className={style.countrybtn}
                    type="button"
                    name={el.name}
                    onClick={() => handleDelete(el)}
                      >x</button>
                </div>
              </div>
            ))}

          </div>
        </form>
      </div>
    </>
  );
}
