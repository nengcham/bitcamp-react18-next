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
        case T.USER_ADD_SUCCESSED:
            return {...state, users: [action.payload, ...state.users]}
    }
}

