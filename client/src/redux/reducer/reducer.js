import { GET_ALL_COUNTRIES, 
    GET_COUNTRY_DETAIL, 
    CREATE_ACTIVITY, 
    GET_COUNTRY_NAME, 
    FILTER_BY_REGION, 
    SORT, 
    GET_ALL_ACTIVITIES,
    FILTER_ACTIVITY, 
    DELETE_ACTIVITY,
    CLEAR_DETAIL,
} from "../actions/actions.js";

const initialState = {
    countries: [],
    activities: [],
    countryDetail: [],
    currentCountries: [],
    currentCountriesAux: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                currentCountries: action.payload,
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
                currentCountries: action.payload
            }
        case FILTER_BY_REGION:
            let countries = state.countries;   
            const statusFiltered = action.payload === 'All' ? 
            countries : countries.filter(e => e.region === action.payload)
            return {
                ...state,
                currentCountries: statusFiltered,
            }
        case SORT:
            let sortedArrByPopulation = state.currentCountries;
            let orderObject = state.currentCountries;
            let sortedArr = [];

            if (action.payload === 'asc') {
                sortedArr = orderObject.sort(function (a, b) {
                    if (a.name > b.name) { return 1 }
                    if (b.name > a.name) { return -1 }
                    else return 0;
                })
            }
            else if (action.payload === 'desc') {
                sortedArr = orderObject.sort(function (a, b) {
                    if (a.name > b.name) { return -1 }
                    if (b.name > a.name) { return 1 }
                    else return 0;
                })
            }          
            else if (action.payload === 'less') 
                sortedArr = sortedArrByPopulation.sort(function (a, b) { 
                if (a.population > b.population) return 1 
                if (b.population > a.population) return -1 
                else return 0;
            }) 
            else if (action.payload === 'more') 
                sortedArr = sortedArrByPopulation.sort(function (a, b) { 
                if (a.population > b.population) return -1 
                if (b.population > a.population) return 1 
                else return 0;
             })
            return {
                ...state,
                currentCountries: sortedArr,
            }

        case GET_ALL_ACTIVITIES:
            return{
                ...state,
                activities: action.payload
            }
        case FILTER_ACTIVITY:
            const filtredCountries = action.payload==='unfiltered'? state.countries : 
            state.countries.filter((c)=>{let activities = c.activities.map((c)=>c.name);
                return activities.includes(action.payload)
            })
            return{
                ...state,
                currentCountries: filtredCountries,
            }
        case DELETE_ACTIVITY:
            const allActivities = state.activities;
            const activities = allActivities.filter(a=> a.id !== action.payload)
            return {
                ...state,
                activities: activities
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
            }
        default:
            return { ...state }
    }
}

export default reducer;