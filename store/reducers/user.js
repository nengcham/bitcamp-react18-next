import { HYDRATE } from "next-redux-wrapper"
import * as T from "../types"

const initialState = {
    users: [],
    loginUser: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case HYDRATE:
            console.log("### Error: Hydration failed ###")
            return {...state, ...action.payload}
        case T.USER_ADD_SUCCESS:
            return {...state, users: [action.payload, ...state.users]}
        case T.LOGIN_REQUEST:
            return {
                ...state,
                loginLoading: true, 
                loginSucceed: false,
                loginError: null
            }
        case T.LOGIN_SUCCESS:
            return {
                ...state,
                loginLoading: false, 
                loginSucceed: true,
                loginError: null,
                user: action.data
            }
        case T.LOGIN_FAILED:
            return {
                ...state,
                loginLoading: false, 
                loginSucceed: false,
                loginError: action.error
            }
        default:
            return state;
    }
}

export default userReducer