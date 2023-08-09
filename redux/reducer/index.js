import { GET_DATA, GET_DATA_BY_ID, GET_DATA_BY_NAME, CLEAN_DETAIL } from "../actions";

const initialState = {
    data: [],
    detail: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            };

        case GET_DATA_BY_ID:
            return {
                ...state,
                detail: action.payload
            };

        case GET_DATA_BY_NAME:
            return {
                ...state,
                data: action,payload
            };

        case CLEAN_DETAIL:
            return {
                ...state,
                detail: {}
            };

        default:
            return { ...state }
    }
};

export default rootReducer;