import axios from 'axios'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const getAllCountries = ()=>(dispatch) =>
axios.get('http://localhost:3001/countries')
.then((response)=>
    dispatch({ type: GET_ALL_COUNTRIES, payload: response.data})
    );