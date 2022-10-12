import { GET_ALL_COUNTRIES } from "../actions/actions.js";

const initialState = {
    countries: [],
    activities: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            }
        default:
            return { ...state }
    }
}

export default reducer;