import React from 'react';
import FacebookLogin from 'react-facebook-login';
import config from '../../config.json';
import fbLogin from './loginService';


const FacebookAuth = () =>{
    const fbResponse = async (response)=>{
        let resp  = await fbLogin(response.accessToken)
        console.log(resp);
        console.log(response)
    }
    return(
        <FacebookLogin
            textButton= "IN WITH FACEBOOK"
            appId={config.FACEBOOK_APP_ID}
            fields="name,email,picture"
            callback={fbResponse}
        />
    )
}

export default FacebookAuth