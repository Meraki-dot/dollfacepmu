import { GET_PICS, GOOGLE_PICS, CLIENT_ID, CLIENT_SECRET } from '../constants';
import axios from 'axios';

export const getPics = () => dispatch => {
    return {
        type: GET_PICS,
        payload: "test"
    }
}

export const googleCall = () => dispatch => {
    axios
        .get(`https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=https://www.instagram.com/dollfacepmu/&response_type=code`)
            .then(res => {
                dispatch({
                    type: GOOGLE_PICS,
                    payload: res.data
                })
            })
}  