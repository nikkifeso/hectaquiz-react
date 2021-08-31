import {LOGIN_START, 
    LOGIN_SUCCESSFUL, 
    LOGIN_FAILED,
    LOGIN_END } from "./logInTypes";
import axios from "axios";
import { toast } from "react-toastify";


const baseUrl = process.env.REACT_APP_BASE_URL;

export const logInAction =(data)=>async(dispatch)=>{
    
    dispatch({type: LOGIN_START})
    
    try{
        console.log(data)
        const res = await axios.post(baseUrl + "/users/login/", data);
        console.log(res.data)
        dispatch({
            type: LOGIN_SUCCESSFUL,
            payload: res.data
        })
        dispatch({
            type: LOGIN_END,
        })
    }
    catch (error){
        console.log(error.response.data)
        dispatch({
            type: LOGIN_FAILED,
            payload: error.response.data.errors.errors
        })
        dispatch({
            type: LOGIN_END,
        })
        toast.error(error.response.data)
    }
    
}