import axios from "axios";

export const GET_DATA = 'GET_DATA';
export const GET_DATA_BY_ID = 'GET_DATA_BY_ID';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const getData = () => async (dispatch) => {
    let json = await axios.get('https://rickandmortyapi.com/api/character/');
    return dispatch({ type: GET_DATA, payload: json.data });
};

export const getDataById = (id) => async (dispatch) => {
    let json = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return dispatch({ type: GET_DATA_BY_ID, payload: json.data });
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};