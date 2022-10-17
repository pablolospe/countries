import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, CREATE_ACTIVITY, GET_COUNTRY_NAME, FILTER_BY_REGION } from "../actions/actions.js";

const initialState = {
    countries: [],
    activities: [],
    countryDetail: [],
    filteredCountries: [],
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
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case GET_COUNTRY_NAME:
            return {
                ...state,
                countries: action.payload
            }
        case FILTER_BY_REGION:
            const allCountries = state.countries;
            const statusFiltered = action.payload === 'All'? allCountries : allCountries.filter(e=>e.region===action.payload)
            console.log(statusFiltered);
            return {
                ...state,
                countries: statusFiltered,
            }
        default:
            return { ...state }
    }
}

export default reducer;