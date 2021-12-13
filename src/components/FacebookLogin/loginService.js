import axios from "axios";

const fbLogin = async (accessToken) =>{
    let res = await axios.post(
        "https://hectaquiz.herokuapp.com/api/rest-auth/facebook/",
        {
            access_token : accessToken
        }
    );
    console.log(res);
    return await res.status
}

export default fbLogin;