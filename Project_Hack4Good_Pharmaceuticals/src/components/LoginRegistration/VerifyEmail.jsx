import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import './style/Verify.css' 
import { CookiesProvider, useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Verify(){
    const [cookies, setCookie] = useCookies(["email"]);
    async function verifyEmail(code){
        try {
            const res = await fetch(`https://magab17-001-site1.ltempurl.com/verifyEmail?email=${cookies.email}&code=${code}`)
            const data = await res.json()
            if(data.ok){
                window.location.href = '/login'
            }else{
                toast.error(data.res)
            }
        } catch (err) {
        console.log(err)
        }
    }
    const [otp, setOtp] = useState("");
    function handleChange(otp){
        setOtp(otp);
        if(otp.length === 6){
            verifyEmail(otp)
        }
    }
    if(cookies.email == undefined || cookies.email.length == 0){
        window.location.href = '/register'
    }
    return(
        <main>
            <div className='verify-box'>
                <h1 className="verify-title">Verify Email</h1>
                <p className='verify-content'>We've sent you an email with verification code. To verify your email please write down the code here, then you may login.<br /> Otherwise, you won't be able to log in.</p>
            </div>
            <div className='verify-input'>
                <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />
                }/>
            </div>
            <ToastContainer />
        </main>
    )
}

export default Verify