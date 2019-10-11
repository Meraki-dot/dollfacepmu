import { GET_PICS, GOOGLE_PICS } from '../constants';

const initialState = {
    picture: {},
    googlePic: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PICS: 
            return {
                ...state,
                picture: action.payload
            }
        case GOOGLE_PICS:
            return {
                ...state,
                googlePic: action.payload
            }
        default:
            return state
    }
}

export default reducer;