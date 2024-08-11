import { commonrequest } from "./ApiCall";
import {BACKEND_URL} from "./helper";
import axios from 'axios'


export const registerfunction = async(data)=>{
    console.log(data, "Data")
    return await axios.post(`${BACKEND_URL}/api/v1/user/register`, data
    )
}
export const sentOtpFunction = async(data)=>{
    console.log(data)
    return await axios.post(`${BACKEND_URL}/api/v1/user/otp`, {"email": data.email})
    // return await commonrequest("POST",`${BACKEND_URL}/api/v1/user/otp`,{"email": "negikaran860@gmail.com"})
}

export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/api/v1/user/login`,data)
}

// verifyOtpFunction to call your OTP verification endpoint
// export const verifyOtpFunction = async (data) => {
//     return await axios.post('/backend-otp', data);
//   }