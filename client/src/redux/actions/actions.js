import axios from 'axios'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const FILTER_BY_REGION = 'FILTER_BY_REGION';
export const ORDER_ALPHABETICALLY = 'ORDER_ALPHABETICALLY';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';



export const getAllCountries = () => (dispatch) =>
    axios.get('http://localhost:3001/countries')
        .then((response) =>
            dispatch({ type: GET_ALL_COUNTRIES, payload: response.data })
        );

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

export const createActivity = (values) => {
    return { type: CREATE_ACTIVITY, payload: {...values} }
};

export function getCountryName(name) {
    return async function (dispatch) {
        try {
            const countryDetail = await axios.get('http://localhost:3001/countries?name=' + name);
            return dispatch({
                type: GET_COUNTRY_NAME,
                payload: countryDetail.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
} 

export function filterCountriesByRegion(payload){
    console.log(payload);
    return{
        type: FILTER_BY_REGION,
        payload,
    }
}

export function orderAlphabetically(payload){
    console.log(payload);
    return{
        type: ORDER_ALPHABETICALLY,
        payload
    }
}

export function orderByPopulation(payload){
    console.log(payload);
    return{
        type: ORDER_BY_POPULATION,
        payload
    }
}

