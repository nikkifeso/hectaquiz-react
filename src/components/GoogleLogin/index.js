import React from 'react';
import GoogleLogin from 'react-google-login';
import config from '../../config.json';
import googleLogin from './loginService';


const GoogleAuth = () =>{
    const googleResponse = async (response)=>{
        let resp  = await googleLogin(response.accessToken)
      console.log(resp);
        console.log(response)
    }
    return(
        <GoogleLogin
            buttonText= "LOGIN WITH GOOGLE"
            clientId={config.GOOGLE_CLIENT_ID}
            onSuccess={googleResponse}
            onFailure={googleResponse}
        />
    )
}

export default GoogleAuth