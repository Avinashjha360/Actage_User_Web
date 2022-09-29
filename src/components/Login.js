import React from 'react';
import { useState } from 'react';
import './style/login.css';
import OTPInput from "otp-input-react";
import api from './HealthBook/api';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
function Login(props) {
    const [signInValue, setSignInValue] = useState({
        countryCode: "+91",
        phoneNumber: "",
        deviceToken: "null",
        appName: "ActageUser",
        platform: "web"
    })
    const [otpValue, setOtpValue] = useState({
        countryCode: "+91",
        phoneNumber: "",
        token: "",
        appName: "ActageUser",

    })
    let navigate = useNavigate();

    const [toggle, settoggle] = useState(false);
    const [OTP, setOTP] = useState("");


    const handleChange1 = (value, data) => {
        setSignInValue(values => ({ ...values, phoneNumber: value.slice(data.dialCode.length), countryCode: '+' + data.dialCode }));
    }

    function handleSubmit1(event) {
        event.preventDefault();

        api.post('/Auth/GetOTP', signInValue)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
        settoggle(!toggle);
    }
    const handleChange2 = (value, data) => {
        setOTP(value);
        setOtpValue(values => ({ ...values, phoneNumber: signInValue.phoneNumber, countryCode: signInValue.countryCode, token: value }));
    }

    function handleSubmit2(event) {
        event.preventDefault();

        api.post('/Auth/GetAccessToken', otpValue)
            .then((res) => {
                localStorage.setItem("token", res.data.data.token);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                navigate("/login", { replace: true });
            })
            console.log(otpValue);

    }

    return (
        <>
            <header>
                <img src="images/logo.png" alt="logo" />
            </header>
            <div className="login-box">

                <div className="login-left-box">

                </div>

                <div className="login-right-box">
                <div id="overlay">
                        <div className="loader"></div>
                </div>
                    {!toggle &&
                        <div className="sign-in">
                            <h3>Sign In</h3>
                            <p>Enter Your Mobile Number</p>
                            <p>We will send a confirmation code</p>
                            <form onSubmit={handleSubmit1}>
                                <PhoneInput
                                    style={{ border: "1px solid #ccc" }}
                                    country={'in'}
                                    onChange={handleChange1}
                                />
                                <button type='submit'>Send OTP</button>
                            </form>
                        </div>
                    }
                  
                    {toggle &&
                        <div className="otp">
                            <h3>OTP</h3>
                            <p>We have send you a verification code on</p>
                            <p>+91-{signInValue.phoneNumber}</p>
                            <div>
                                <form onSubmit={handleSubmit2}>
                                    <OTPInput value={OTP}
                                        onChange={handleChange2}
                                        autoFocus
                                        OTPLength={5}
                                        otpType="number"
                                        disabled={false}
                                        secure
                                        className='temp' />
                                    <button type="submit">Sign In</button>
                                </form>
                            </div>
                        </div>
                    }

                </div>

            </div>
        </>
    )
}

export default Login