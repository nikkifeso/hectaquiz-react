import {LOGIN_START, 
        LOGIN_SUCCESSFUL, 
        LOGIN_FAILED,
        LOGIN_END } from "./logInTypes";

const initialState = {
    logInLoading: false,
    logInData: {},
    logInError: "",
    logInSuccess: false
}

export const logInReducer =(state=initialState, action)=>{
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                logInLoading: true,
                logInSuccess: false
            }
        case LOGIN_SUCCESSFUL:
            return{
                ...state,
                logInLoading: false,
                logInError: "",
                logInData: {...action.payload},
                logInSuccess: true,
            }
        case LOGIN_FAILED:
            return{
                ...state,
                logInLoading: false,
                logInData: {},
                logInError: action.payload,
                logInSuccess: false
            }
        case LOGIN_END:
            return{
                ...state,
                logInLoading: false,
            }
        default:
            return state;
    }
}
