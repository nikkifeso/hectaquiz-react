import {SIGNUP_START,
        SIGNUP_SUCCESSFUL,
        SIGNUP_FAILED,
        SIGNUP_END
    } from './signupTypes';
import axios from 'axios';
import { toast } from 'react-toastify';


const baseUrl = process.env.REACT_APP_BASE_URL;

export const signUpAction =(data)=>async(dispatch)=>{
    
    dispatch({type: SIGNUP_START})
    
    try{
        console.log(data)
        const res = await axios.post(baseUrl + "/users/register/", data);
        console.log(res.data)
        dispatch({
            type: SIGNUP_SUCCESSFUL,
            payload: res.data
        })
        dispatch({
            type: SIGNUP_END,
        })
    }
    catch (error){
        console.log(error.response.data)
        dispatch({
            type: SIGNUP_FAILED,
            payload: error.response.data.errors.errors
        })
        dispatch({
            type: SIGNUP_END,
        })
        toast.error(error.response.data)
    }
    
}
