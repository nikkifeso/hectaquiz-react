import {SIGNUP_START,
        SIGNUP_SUCCESSFUL,
        SIGNUP_FAILED,
        SIGNUP_END
        } from './signupTypes';

const initialState = {
    signUpLoading: false,
    signUpData: {},
    signUpError: "",
    signUpSuccess: false
}

export const signUpReducer = (state = initialState, action)=>{
    switch(action.type){
        case SIGNUP_START:
            return {
                ...state,
                signUpLoading: true,
                signUpSuccess: false,
            };
        case SIGNUP_SUCCESSFUL:
            return {
                ...state,
                signUpLoading: false,
                signUpError: "",
                signUpData: {...action.payload},  
                signUpSuccess: true,
            };
        case SIGNUP_FAILED:
            return {
                ...state,
                signUpLoading: false,
                signUpError: action.payload,
                signUpSuccess: false,
                signUpData: {},
            };
        case SIGNUP_END:
            return {
                ...state,
                signUpLoading: false,
            }
        default:
            return state;
    }
    
}
