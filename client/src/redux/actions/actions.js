import axios from 'axios'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';

export const getAllCountries = () => (dispatch) =>
    axios.get('http://localhost:3001/countries')
        .then((response) =>
            dispatch({ type: GET_ALL_COUNTRIES, payload: response.data })
        );

// export const getCountryDetail = (id) => (dispatch) =>
//     axios.get(`http://localhost:3001/countries/${id}`)
//         .then((response) =>
//             dispatch({ type: GET_COUNTRY_DETAIL, payload: response.data })
//         );

        export function getCountryDetail(id) {
            return async function (dispatch) {
              try {
                const countryDetail = await axios.get(
                  `http://localhost:3001/countries/${id}`
                );
                
                return dispatch({
                  type: GET_COUNTRY_DETAIL,
                  payload: countryDetail.data,
                });
              } catch (error) {
                console.log(error);
              }
            };
          }