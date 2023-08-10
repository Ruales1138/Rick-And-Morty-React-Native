import axios from "axios";

const URL = 'https://rickandmortyapi.com/api/character/';
export const GET_DATA = 'GET_DATA';
export const GET_DATA_BY_ID = 'GET_DATA_BY_ID';
export const GET_DATA_BY_NAME = 'GET_DATA_BY_NAME';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const getData = () => async (dispatch) => {
    let json = await axios.get(URL);
    return dispatch({ type: GET_DATA, payload: json.data });
};

export const getDataById = (id) => async (dispatch) => {
    let json = await axios.get(`${URL}${id}`);
    return dispatch({ type: GET_DATA_BY_ID, payload: json.data });
};

export const getDataByName = (name) => async (dispatch) => {
    let json = await axios.get(`${URL}?name=${name}`);
    return dispatch({ type: GET_DATA_BY_NAME, payload: json.data });
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};