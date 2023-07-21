import axios from '../axios/axios'
export const AuthOtpSend = async(phone)=>{
    try {
        const resData = await axios.post('/sendotp',phone)
        return resData
    } catch (error) {
        console.log(error)
    }
}

export const VerifyOtp = async(data)=>{
    try {
        const otpCheck = await axios.post('/verifyotp',{data})
        return otpCheck
    } catch (error) {
        console.log(error)
    }
}

export const ResendOtpApi = async(phone)=>{
    try {
        const resend = await axios.post('/resend',{phone})
        return resend
    } catch (error) {
        console.log(error)
    }
}

export const AuthsubmissionApi = async(value)=>{
    try {
        const formData = await axios.post('/authform',{value})
        return  formData

    } catch (error) {
        console.log(error)
    }
} 