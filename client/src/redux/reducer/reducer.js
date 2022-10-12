import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL } from "../actions/actions.js";

const initialState = {
    countries: [],
    activities: [],
    countryDetail: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
            }        
        default:
            return { ...state }
    }
}

export default reducer;