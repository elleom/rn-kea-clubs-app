import {AUTHENTICATE, LOGOUT, SIGN_IN, SIGN_UP} from "../actions/AuthActions";

const initialState = {
    token: null,
    userId: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
         return {
             token: action.token,
             userId: action.userId
         }
        case SIGN_UP:
            return {
                token: action.token,
                userId: action.userId
            }
        case AUTHENTICATE:{
            return {
                token: action.token,
                userId: action.userId
            }
        }
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}
