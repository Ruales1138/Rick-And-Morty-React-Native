import axios from "axios";

export const GET_DATA = 'GET_DATA';

export const getData = () => async (dispatch) => {
    let json = await axios.get('https://rickandmortyapi.com/api/character/');
    return dispatch({ type: GET_DATA, payload: json.data });
};