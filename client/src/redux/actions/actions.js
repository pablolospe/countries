import axios from 'axios'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const FILTER_BY_REGION = 'FILTER_BY_REGION';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const ORDER_ALPHABETICALLY = 'ORDER_ALPHABETICALLY';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';

export const getAllCountries = () => (dispatch) =>
    axios.get('/countries')
        .then((response) =>
            dispatch({ type: GET_ALL_COUNTRIES, payload: response.data })
        );

export function getCountryDetail(id) {
    return async function (dispatch) {
        try {
            const countryDetail = await axios.get(
                `/countries/${id}`
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
    return async function(){
        try {
            await axios.post('/activities', values);   
            return { type: CREATE_ACTIVITY, payload: {...values} }  
        } catch (error) {
            console.log(error);
        }
    }
};

// export const createActivity = (values) => {
//     return { type: CREATE_ACTIVITY, payload: {...values} }
// };

export function getCountryName(name) {
    return async function (dispatch) {
        // dispatch(loading())
        try {
            const countryDetail = await axios.get('/countries?name=' + name);
            return dispatch({
                type: GET_COUNTRY_NAME,
                payload: countryDetail.data,
            })
        } catch (error) {
            return dispatch({
                type: GET_COUNTRY_NAME,
                payload: []
            })
        }
    }
}

export function filterCountriesByRegion(payload){
    return{
        type: FILTER_BY_REGION,
        payload,
    }
}

export function orderAlphabetically(payload){
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

export const getAllActivities=()=>(dispatch)=>{
    axios.get('/activities')
        .then((response) =>
            dispatch({ type: GET_ALL_ACTIVITIES, payload: response.data })
        );
}

export function filterActivity(payload){
    return {
        type: FILTER_ACTIVITY,
        payload,
    }

}

export function cleanDetail() {
    return {
      type: CLEAR_DETAIL,
      payload: [],
    };
  }


export function deleteActivity(id){
    return async function (dispatch) {
        try {
            const deleteAc = await axios.delete(
                `/activities/${id}`
            );
            return dispatch({
                type: DELETE_ACTIVITY,
                payload: deleteAc.data.id
            });
        } catch (error) {
            console.log(error);
        }
    };
}