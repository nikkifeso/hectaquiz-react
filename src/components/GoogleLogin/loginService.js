import axios from "axios";

const googleLogin = async (accessToken) =>{
    let res = await axios.post(
        "https://hectaquiz.herokuapp.com/api/rest-auth/google/",
        {
            access_token : accessToken
        }
    );
    console.log(res);
    return await res.status
}

export default googleLogin;